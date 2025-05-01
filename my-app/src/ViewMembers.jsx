import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  CircularProgress,
  Box,
  Alert
} from '@mui/material';

function ViewMembers() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch('http://localhost:8087/api/members/view-members');
        
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
    <Container maxWidth="md" sx={{ 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        maxWidth: 800,
        py: 4,
        textAlign: 'center'
      }}>
      <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Members List
      </Typography>
      
      {members.length === 0 ? (
        <Typography variant="body1">No members found</Typography>
      ) : (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {members.map((member, index) => (
            <React.Fragment key={member._id}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt={member.name} src={member.profile_image} />
                </ListItemAvatar>
                <ListItemText
                  primary={member.name}
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        color="text.primary"
                        display="block"
                      >
                        {member.regNo}
                      </Typography>
                      {member.email}
                    </>
                  }
                />
              </ListItem>
              {index < members.length - 1 && <Divider variant="inset" component="li" />}
            </React.Fragment>
          ))}
        </List>
      )}
    </Container>
  );
}

export default ViewMembers;