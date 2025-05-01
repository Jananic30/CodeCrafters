import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  Grid,
  Box,
  CircularProgress,
  Alert
} from '@mui/material';

function MemberDetails() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:8087/api/members/member-details');
        
        if (!response.ok) {
          throw new Error('Failed to fetch members');
        }
        
        const data = await response.json();
        setMembers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
        All Members
      </Typography>
      
      {members.length === 0 ? (
        <Typography variant="body1">No members found</Typography>
      ) : (
        <Grid container spacing={3}>
          {members.map((member) => (
            <Grid item key={member._id} xs={12} sm={6} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', pt: 3 }}>
                  <Avatar
                    alt={member.name}
                    src={member.profile_image}
                    sx={{ width: 100, height: 100 }}
                  />
                </Box>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="div" align="center">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Registration No:</strong> {member.regNo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    <strong>Email:</strong> {member.email}
                  </Typography>
                  {member.desc && (
                    <Typography variant="body2" color="text.secondary">
                      <strong>About:</strong> {member.desc}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default MemberDetails;