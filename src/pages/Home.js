import React from 'react';
import { Box, Typography, Container, Button, Grid, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, KeyboardArrowDown } from '@mui/icons-material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';

const IntroCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(37, 99, 235, 0.1);
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(37, 99, 235, 0.2);
    box-shadow: 0 8px 16px rgba(37, 99, 235, 0.1);
  }
`;

const BlogCard = styled(Link)`
  display: block;
  text-decoration: none;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(37, 99, 235, 0.1);
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 4px 6px rgba(37, 99, 235, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(37, 99, 235, 0.2);
    box-shadow: 0 8px 16px rgba(37, 99, 235, 0.1);
  }
`;

const BlogCardWrapper = styled(motion.div)`
  height: 100%;
`;

const BlogTitle = styled(Typography)`
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 0.5rem;
  transition: color 0.2s ease;
`;

const BlogDate = styled(Typography)`
  color: #64748b;
  font-size: 0.875rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  margin-bottom: 0.75rem;
`;

const BlogExcerpt = styled(Typography)`
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
`;

const TagChip = styled.span`
  display: inline-block;
  padding: 0.25rem 0.75rem;
  margin: 0.25rem;
  background: rgba(37, 99, 235, 0.1);
  color: #2563eb;
  border-radius: 16px;
  font-size: 0.75rem;
  font-family: 'SF Mono', 'Fira Code', monospace;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(37, 99, 235, 0.15);
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #2563eb, #14b8a6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;

const ScrollText = styled(Typography)`
  color: #475569;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.875rem;
  margin-bottom: 0.5rem;
`;

const ScrollIndicator = styled(Box)`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  
  @media (max-width: 600px) {
    position: static;
    margin-top: 3rem;
  }
`;

const Home = () => {
  const scrollToBlogs = () => {
    const blogsSection = document.getElementById('recent-blogs');
    blogsSection.scrollIntoView({ behavior: 'smooth' });
  };

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <Container 
      maxWidth="lg" 
      sx={{ 
        mt: { xs: 8, sm: 12 }, 
        mb: 8,
        px: { xs: 2, sm: 3 }
      }}
    >
      <IntroCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2" gutterBottom>
              <GradientText>Hello, World</GradientText> 👋🏾
            </Typography>
            <Typography variant="h4" gutterBottom sx={{ color: '#475569' }}>
              I'm Samuel, a Software Engineer & Web Developer
            </Typography>
            <Typography variant="body1" paragraph sx={{ color: '#475569', mb: 3, maxWidth: '800px' }}>
              I specialize in building scalable and innovative web applications with a focus on financial technology solutions. My expertise lies in creating efficient, secure, and user-centric digital experiences.
            </Typography>
            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
              <Button
                variant="contained"
                component={Link}
                to="/contact"
                sx={{
                  backgroundColor: '#2563eb',
                  '&:hover': {
                    backgroundColor: '#1d4ed8',
                  },
                }}
              >
                Get in Touch
              </Button>
              <Button
                variant="outlined"
                component={Link}
                to="/projects"
                sx={{
                  borderColor: '#2563eb',
                  color: '#2563eb',
                  '&:hover': {
                    borderColor: '#1d4ed8',
                    backgroundColor: 'rgba(37, 99, 235, 0.05)',
                  },
                }}
              >
                View Projects
              </Button>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <IconButton
                component="a"
                href="https://github.com/gudlucsam"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#475569',
                  '&:hover': {
                    color: '#2563eb',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <GitHub />
              </IconButton>
              <IconButton
                component="a"
                href="https://twitter.com/ayine_atule"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#475569',
                  '&:hover': {
                    color: '#2563eb',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/samuelatule"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#475569',
                  '&:hover': {
                    color: '#2563eb',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.2s ease-in-out',
                }}
              >
                <LinkedIn />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </IntroCard>

      <Box id="recent-blogs" sx={{ mt: 8 }}>
        <Typography variant="h3" sx={{ mb: 4, color: '#0f172a' }}>
          Recent Blog Posts
        </Typography>
        <Grid container spacing={3}>
          {recentPosts.map((post, index) => (
            <Grid item xs={12} md={4} key={index}>
              <BlogCardWrapper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard to={`/blog/${post.slug}`}>
                  <BlogTitle variant="h6" sx={{
                    '&:hover': {
                      color: '#2563eb'
                    }
                  }}>
                    {post.title}
                  </BlogTitle>
                  <BlogDate variant="body2">
                    {post.date}
                  </BlogDate>
                  <BlogExcerpt>
                    {post.excerpt}
                  </BlogExcerpt>
                  <Box sx={{ mt: 2 }}>
                    {post.tags.map((tag, i) => (
                      <TagChip key={i}>{tag}</TagChip>
                    ))}
                  </Box>
                </BlogCard>
              </BlogCardWrapper>
            </Grid>
          ))}
        </Grid>
      </Box>

      <ScrollIndicator>
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: {
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          style={{
            position: 'relative',
            zIndex: 1
          }}
        >
          <KeyboardArrowDown 
            sx={{ 
              color: '#2563eb',
              fontSize: '2rem',
              opacity: 0.8
            }} 
          />
        </motion.div>
      </ScrollIndicator>
    </Container>
  );
};

export default Home;
