import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import styled from '@emotion/styled';

const ContactLink = styled.a`
  color: #475569;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #2563eb;
    background: rgba(37, 99, 235, 0.05);
  }
`;

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 12, pb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Get in Touch
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mb: 6 }}>
          I'm always open to new opportunities and collaborations. Feel free to reach out if you'd like to connect!
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Typography variant="h5" gutterBottom>
                Send a Message
              </Typography>
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Name"
                      name="name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Subject"
                      name="subject"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Message"
                      name="message"
                      multiline
                      rows={4}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{ 
                    mt: 3,
                    backgroundColor: '#2563eb',
                    '&:hover': {
                      backgroundColor: '#1d4ed8'
                    }
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
              <Typography variant="h5" gutterBottom>
                Other Ways to Connect
              </Typography>
              <Box sx={{ mt: 3 }}>
                <ContactLink href="mailto:atulesamuel20@gmail.com">
                  <Email /> atulesamuel20@gmail.com
                </ContactLink>
                <ContactLink href="https://github.com/gudlucsam" target="_blank" rel="noopener noreferrer">
                  <GitHub /> github.com/gudlucsam
                </ContactLink>
                <ContactLink href="https://www.linkedin.com/in/samuelatule" target="_blank" rel="noopener noreferrer">
                  <LinkedIn /> linkedin.com/in/samuelatule
                </ContactLink>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Contact;
