import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
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

const Navbar = () => {
  const location = useLocation();

  const pages = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <NavContainer position="fixed" elevation={0}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ 
          display: 'flex', 
          gap: 3,
        }}>
          {pages.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.name}
            </NavLink>
          ))}
        </Box>
      </Toolbar>
    </NavContainer>
  );
};

export default Navbar;
