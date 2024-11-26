import React from 'react';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BlogList from './pages/blog/BlogList';
import BlogPost from './pages/blog/BlogPost';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2563eb', // Bright blue
      light: '#60a5fa',
      dark: '#1d4ed8',
    },
    secondary: {
      main: '#14b8a6', // Teal
      light: '#5eead4',
      dark: '#0f766e',
    },
    background: {
      default: '#f8fafc',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
  },
  typography: {
    fontFamily: "'SF Mono', 'Fira Code', monospace",
    h1: {
      fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif",
      fontWeight: 600,
      color: '#0f172a',
    },
    h2: {
      fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif",
      fontWeight: 600,
      color: '#1e293b',
    },
    h3: {
      fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif",
      fontWeight: 600,
      color: '#334155',
    },
    body1: {
      fontFamily: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif",
      fontSize: '1.125rem',
      lineHeight: 1.7,
      color: '#334155',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
          scrollBehavior: 'smooth',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '0.75rem 1.5rem',
          borderRadius: '8px',
          fontFamily: "'SF Mono', 'Fira Code', monospace",
        },
        contained: {
          backgroundColor: '#2563eb',
          color: '#ffffff',
          boxShadow: '0 2px 4px rgba(37, 99, 235, 0.1)',
          '&:hover': {
            backgroundColor: '#1d4ed8',
            boxShadow: '0 4px 6px rgba(37, 99, 235, 0.2)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(37, 99, 235, 0.1)',
          boxShadow: '0 4px 6px rgba(37, 99, 235, 0.05)',
        },
      },
    },
  },
});

const globalStyles = {
  '*::-webkit-scrollbar': {
    width: '8px',
  },
  '*::-webkit-scrollbar-track': {
    background: '#f1f5f9',
  },
  '*::-webkit-scrollbar-thumb': {
    background: '#94a3b8',
    borderRadius: '4px',
  },
  '*::-webkit-scrollbar-thumb:hover': {
    background: '#64748b',
  },
  '.glass-card': {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(37, 99, 235, 0.1)',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(37, 99, 235, 0.05)',
    transition: 'all 0.3s ease',
    '&:hover': {
      border: '1px solid rgba(37, 99, 235, 0.2)',
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 12px rgba(37, 99, 235, 0.1)',
    },
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={globalStyles} />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
