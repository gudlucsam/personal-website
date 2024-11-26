import React, { useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Menu, MenuItem, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import styled from '@emotion/styled';

const NavContainer = styled(AppBar)`
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(37, 99, 235, 0.1);
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.05);
`;

const NavLink = styled(Link)`
  color: #475569;
  text-decoration: none;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #2563eb;
    background: rgba(37, 99, 235, 0.05);
  }

  &.active {
    color: #2563eb;
    background: rgba(37, 99, 235, 0.1);
  }
`;

const MobileMenuItem = styled(MenuItem)`
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.9rem;
  color: #475569;
  
  &:hover {
    color: #2563eb;
    background: rgba(37, 99, 235, 0.05);
  }
`;

const Navbar = () => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavContainer position="fixed" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: isMobile ? 'flex-end' : 'center' }}>
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
              sx={{ color: '#475569' }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {pages.map((item) => (
                <MobileMenuItem 
                  key={item.name}
                  component={Link}
                  to={item.path}
                  onClick={handleClose}
                  selected={location.pathname === item.path}
                >
                  {item.name}
                </MobileMenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Box sx={{ 
            display: 'flex', 
            gap: 3,
          }}>
            {pages.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.name}
              </NavLink>
            ))}
          </Box>
        )}
      </Toolbar>
    </NavContainer>
  );
};

export default Navbar;
