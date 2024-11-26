import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Box, Button, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { blogPosts } from '../../data/blogPosts';
import ReactMarkdown from 'react-markdown';
import { ArrowBack } from '@mui/icons-material';

const GlassContainer = styled(motion.div)`
  background: rgba(10, 25, 47, 0.3);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  padding: 2rem;
  margin: 2rem 0;
`;

const MarkdownStyles = styled(Box)`
  color: ${props => props.theme.palette.text.primary};
  
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.palette.primary.main};
    margin: 2rem 0 1rem;
    font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif;
  }
  
  h1 {
    font-size: 2.5rem;
    border-bottom: 1px solid rgba(100, 255, 218, 0.1);
    padding-bottom: 0.5rem;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  h3 {
    font-size: 1.5rem;
  }
  
  p {
    margin: 1rem 0;
    line-height: 1.7;
  }
  
  ul, ol {
    margin: 1rem 0;
    padding-left: 2rem;
  }
  
  li {
    margin: 0.5rem 0;
  }
  
  strong {
    color: ${props => props.theme.palette.primary.main};
  }
  
  code {
    background: rgba(100, 255, 218, 0.1);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-family: 'SF Mono', 'Fira Code', monospace;
    font-size: 0.9em;
  }
  
  blockquote {
    border-left: 4px solid ${props => props.theme.palette.primary.main};
    margin: 1rem 0;
    padding-left: 1rem;
    font-style: italic;
  }
`;

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(post => post.slug === slug);

  if (!post) {
    return (
      <Container maxWidth="lg" sx={{ pt: 12, pb: 6 }}>
        <Typography variant="h2">Post not found</Typography>
        <Button 
          component={Link} 
          to="/blog"
          startIcon={<ArrowBack />}
          sx={{ mt: 2 }}
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ pt: 12, pb: 6 }}>
      <Button 
        component={Link} 
        to="/blog"
        startIcon={<ArrowBack />}
        sx={{ mb: 4 }}
      >
        Back to Blog
      </Button>

      <GlassContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Typography 
          variant="h1" 
          sx={{ 
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 2,
            color: 'primary.main'
          }}
        >
          {post.title}
        </Typography>

        <Typography 
          variant="body2" 
          sx={{ 
            mb: 3,
            color: 'text.secondary',
            fontFamily: "'SF Mono', 'Fira Code', monospace"
          }}
        >
          {post.date}
        </Typography>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 4 }}>
          {post.tags.map((tag, index) => (
            <Chip 
              key={index}
              label={tag}
              size="small"
              sx={{
                backgroundColor: 'rgba(100, 255, 218, 0.1)',
                color: 'primary.main',
                borderRadius: '4px'
              }}
            />
          ))}
        </Box>

        <MarkdownStyles>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </MarkdownStyles>
      </GlassContainer>
    </Container>
  );
};

export default BlogPost;
