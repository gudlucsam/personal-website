import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogPosts';

const BlogCardWrapper = styled(motion.div)`
  height: 100%;
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

const BlogList = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 12, mb: 8 }}>
      <Typography variant="h2" sx={{ mb: 6, color: '#0f172a' }}>
        Blog Posts
      </Typography>
      <Grid container spacing={3}>
        {blogPosts.map((post, index) => (
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
                  {post.summary}
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
    </Container>
  );
};

export default BlogList;
