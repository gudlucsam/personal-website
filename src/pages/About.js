import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const About = () => {
  const skills = [
    {
      category: 'Languages & Frameworks',
      items: ['React', 'React Native', 'Python', 'Java', 'JavaScript']
    },
    {
      category: 'Technologies',
      items: ['RESTful Services', 'Dropwizard']
    },
    {
      category: 'Machine Learning',
      items: ['Keras', 'ConvNet', 'LSTM', 'TTS', 'Speech Recognition']
    }
  ];

  const experiences = [
    {
      title: 'Full Stack Web Developer (Associate)',
      company: 'Goldman Sachs',
      location: 'London, England',
      period: 'Jan 2024 – Present',
      points: [
        'Implementing Restful services with Java and Dropwizard, utilizing JUnit for backend testing',
        'Developing Opera web platform using React, K6, Cypress, and Jest',
        'Leading sprint standups and managing support requests',
        'Participating in architectural discussions and implementing key features'
      ]
    },
    {
      title: 'Full Stack Web Developer (Analyst)',
      company: 'Goldman Sachs',
      location: 'London, England',
      period: 'May 2021 – Dec 2023',
      points: [
        'Implemented Restful services with Java and Dropwizard',
        'Developed Opera web platform using React, Cypress, and Jest',
        'Managed support requests and automated tasks with Python'
      ]
    },
    {
      title: 'React Native Mobile Developer',
      company: 'Elparah Consult',
      location: 'Accra, Ghana',
      period: 'Sep 2020 – Apr 2021',
      points: [
        'Developed mobile applications with React Native for Node Restful Services'
      ]
    },
    {
      title: 'Technical Writer',
      company: 'Fixate IO',
      location: 'California',
      period: 'Sep 2018 – Sep 2020',
      points: [
        'Created and developed technical articles on software technologies'
      ]
    }
  ];

  return (
    <Container>
      <Box sx={{ pt: 12, pb: 6 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph sx={{ maxWidth: '800px' }}>
          Software Engineer specializing in building scalable and innovative web applications, with deep expertise in Java and React. With extensive experience developing solutions for financial institutions, I possess a strong understanding of the industry's unique challenges and requirements. I hold a BSc in Computer Science and am passionate about crafting efficient solutions to complex problems while staying ahead of emerging technologies in web development.
        </Typography>
        
        <Typography variant="h4" sx={{ mt: 6, mb: 3 }}>
          Skills & Expertise
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skillSet) => (
            <Grid item xs={12} md={4} key={skillSet.category}>
              <Paper elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {skillSet.category}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {skillSet.items.map((skill) => (
                    <Paper
                      key={skill}
                      sx={{
                        px: 2,
                        py: 1,
                        backgroundColor: 'background.paper',
                        borderRadius: 2,
                      }}
                    >
                      {skill}
                    </Paper>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Typography variant="h4" sx={{ mt: 6, mb: 3 }}>
          Experience
        </Typography>
        {experiences.map((exp) => (
          <Paper elevation={3} sx={{ p: 3, mb: 3 }} key={exp.title + exp.period}>
            <Typography variant="h6">{exp.title}</Typography>
            <Typography variant="subtitle1" color="primary">{exp.company}</Typography>
            <Typography variant="subtitle2" color="text.secondary">
              {exp.location} | {exp.period}
            </Typography>
            <Box component="ul" sx={{ mt: 1, pl: 2 }}>
              {exp.points.map((point, index) => (
                <Typography component="li" variant="body2" key={index} sx={{ mb: 0.5 }}>
                  {point}
                </Typography>
              ))}
            </Box>
          </Paper>
        ))}

        <Typography variant="h4" sx={{ mt: 6, mb: 3 }}>
          Education
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Typography variant="h6">BSc. Computer Science</Typography>
          <Typography variant="subtitle1" color="primary">Ashesi University College</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Berekuso, Eastern Region | Graduated June 2020
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default About;
