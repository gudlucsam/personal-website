import React from 'react';
import { Box, Typography, Container, Grid, Paper, Chip, IconButton, Link } from '@mui/material';
import { Code, Science, DirectionsBus, SignLanguage, GitHub } from '@mui/icons-material';

const Projects = () => {
  const projects = [
    {
      title: 'LibiumNet - Automatic Lip Reading Framework',
      description: 'A Framework for Automatic Lip Reading accepted by Ashesi Seed Journal and presented at ACM COMPASS 2019.',
      icon: <Science />,
      technologies: ['ConvNet', 'LSTM', 'Computer Vision'],
      type: 'Research',
      github: 'https://github.com/gudlucsam/LibiumNet'
    },
    {
      title: 'Ghanaian Sign Language Recognition',
      description: 'Developed continuous Sign Language Recognition application for Ghanaian Sign Language as a Capstone Project.',
      icon: <SignLanguage />,
      technologies: ['Computer Vision', 'Machine Learning', 'Pattern Recognition'],
      type: 'Capstone',
      github: 'https://github.com/gudlucsam/GSL-Recognition'
    },
    {
      title: 'Ride Booking Mobile Application',
      description: 'User-friendly Mobile Application for ride booking and real-time bus location update with MQTT.',
      icon: <DirectionsBus />,
      technologies: ['Mobile Development', 'MQTT', 'Real-time Updates'],
      type: 'Personal',
      github: 'https://github.com/gudlucsam/RideBookingApp'
    },
    {
      title: 'Speech Recognition System',
      description: 'Developed Text-to-Speech (TTS) and Speech Recognition Systems for Local Ghanaian Languages.',
      icon: <Code />,
      technologies: ['TTS', 'Speech Recognition', 'NLP'],
      type: 'Professional',
      github: 'https://github.com/gudlucsam/GhanaSpeech'
    }
  ];

  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Projects & Research
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px', mb: 6 }}>
          A selection of my academic, research, and personal projects, showcasing my work in machine learning, 
          mobile development, and software engineering.
        </Typography>

        <Grid container spacing={3}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.title}>
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                  }
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 2 }}>
                  {project.icon}
                  <Typography variant="h6" sx={{ flex: 1 }}>
                    {project.title}
                  </Typography>
                  {project.github && (
                    <IconButton 
                      component={Link}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ 
                        color: 'text.secondary',
                        '&:hover': {
                          color: '#2563eb'
                        }
                      }}
                    >
                      <GitHub />
                    </IconButton>
                  )}
                </Box>
                <Chip 
                  label={project.type} 
                  color="primary" 
                  size="small" 
                  sx={{ alignSelf: 'flex-start', mb: 2 }}
                />
                <Typography variant="body2" sx={{ mb: 2, flex: 1 }}>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
                  {project.technologies.map((tech) => (
                    <Chip
                      key={tech}
                      label={tech}
                      variant="outlined"
                      size="small"
                      sx={{
                        borderColor: 'rgba(37, 99, 235, 0.3)',
                        color: '#475569',
                        '&:hover': {
                          borderColor: '#2563eb',
                          backgroundColor: 'rgba(37, 99, 235, 0.05)'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Projects;
