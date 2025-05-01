import React from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" color="primary" sx={{ boxShadow: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        
        <Typography variant="h6" component="div">
          Student Management Portal
        </Typography>

        
        <Box>
          <Button color="inherit" onClick={() => navigate("/add-member")}>
            Add Members
          </Button>
          <Button color="inherit" onClick={() => navigate("/view-members")}>
            View Members
          </Button>
          <Button color="inherit" onClick={() => navigate("/member-details")}>
            Member Details
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;