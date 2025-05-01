import React, { useState } from 'react';
import { 
  Box,
  Typography,
  TextField,
  Button,
  Container,
  Paper,
  Alert,
  Snackbar
} from '@mui/material';

function AddMembers() {
  const [formData, setFormData] = useState({
    name: '',
    regNo: '',
    email: '',
    profile_image: '',
    desc: ''
  });
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8087/api/members/add-member', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setOpenSuccess(true);
        
        // Reset form
        setFormData({
          name: '',
          regNo: '',
          email: '',
          profile_image: '',
          desc: ''
        });
      } else {
        setErrorMessage(data.message || 'Failed to add member');
        setOpenError(true);
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again.');
      setOpenError(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    setOpenError(false);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome.
        </Typography>
        <Typography variant="h5" gutterBottom>
          Welcome to Student Management Application Portal
        </Typography>
        <Typography variant="body1">
          Please fill out the form below to register a new student member
        </Typography>
      </Box>

      <Paper elevation={3} sx={{ p: 4 }}>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Registration Number"
            name="regNo"
            value={formData.regNo}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Profile Image URL"
            name="profile_image"
            value={formData.profile_image}
            onChange={handleChange}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Description (Optional)"
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
          />
          
          <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{ px: 5 }}
            >
              Add Member
            </Button>
          </Box>
        </Box>
      </Paper>

      {/* <Snackbar
        open={openSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Member added successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={openError}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar> */}
    </Container>
  );
}

export default AddMembers;