import React from "react";
import {
  Box,
  Grid,
  Avatar,
  Typography,
  IconButton,
  Button,
  TextField,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";

const ProfileInfo = () => {
  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
      {/* Sidebar */}
      <Box
        sx={{
          width: "250px",
          backgroundColor: "#F7F7F8",
          padding: 2,
          boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h5" sx={{ mb: 4 }}>
          NHUIS
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Overview
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Currency
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Banks
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Cards
          </Typography>
          <Typography variant="body1" sx={{ mb: 1, color: "#8D4DFF" }}>
            Setting
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Profile
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Security
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Option
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Theme
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Log Out
          </Typography>
        </Box>
      </Box>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, padding: 3 }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography variant="h4">Setting</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar src="/path/to/avatar.jpg" sx={{ mr: 2 }} />
            <Typography variant="body1">Srujana</Typography>
          </Box>
        </Box>

        {/* Profile Section */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={5.5}>
            <Card sx={{ mb: 2, borderRadius: 3, backgroundColor: "white" }}>
              <CardContent
                sx={{
                  backgroundColor: "#F5F5F5",
                  borderTopRightRadius: 3,
                  borderTopLeftRadius: 3,
                }}
              >
                <Typography variant="h6">Your profile</Typography>
              </CardContent>
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 3,
                    // p: 2,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      display: "inline-block",
                      width: 64,
                      height: 64,
                    }}
                  >
                    <Avatar
                      src="/path/to/profile-picture.jpg"
                      sx={{ width: "100%", height: "100%" }}
                    />
                    <IconButton
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        backgroundColor: "white",
                        borderRadius: "50%",
                        width: 64,
                        height: 64,
                      }}
                    >
                      <CameraAltIcon fontSize="small" />
                    </IconButton>
                  </Box>

                  <Box sx={{ flexGrow: 1, m: 2 }}>
                    <Typography variant="h6">Srujana</Typography>
                    <Typography variant="body2">+880 1924699597</Typography>
                  </Box>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>

            <Card sx={{ mb: 2, borderRadius: 3, backgroundColor: "white" }}>
              <CardContent
                sx={{
                  backgroundColor: "#F5F5F5",
                  borderTopRightRadius: 3,
                  borderTopLeftRadius: 3,
                }}
              >
                <Typography variant="h6">Emails</Typography>
              </CardContent>

              <CardContent>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    padding: "2px 4px",
                    mb: 1,
                    textTransform: "capitalize",
                  }}
                >
                  Primary
                </Button>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  srujana313@gmail.com
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  srujana7@gmail.com
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    mr: 2,
                    color: "black",
                    fontSize: "12px",
                    borderRadius: "20px",
                    padding: "4px 8px",
                    fontStyle: "normal",
                    backgroundColor: "white",
                    borderColor: "#F5F5F5",
                    textTransform: "unset",
                    fontWeight: "semibold",
                  }}
                >
                  See all email (4)
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mr: 2,
                    color: "black",
                    fontSize: "12px",
                    borderRadius: "20px",
                    padding: "4px 8px",
                    fontStyle: "normal",
                    backgroundColor: "white",
                    borderColor: "#F5F5F5",
                    textTransform: "capitalize",
                    fontWeight: "semibold",
                  }}
                >
                  Add Email
                </Button>
              </CardContent>
            </Card>

            <Card sx={{ mb: 2, borderRadius: 3, backgroundColor: "white" }}>
              <CardContent
                sx={{
                  backgroundColor: "#F5F5F5",
                  borderTopRightRadius: 3,
                  borderTopLeftRadius: 3,
                }}
              >
                <Typography variant="h6">Phone Number</Typography>
              </CardContent>
              <CardContent>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    padding: "2px 4px",
                    mb: 1,
                    textTransform: "capitalize",
                  }}
                >
                  Primary
                </Button>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  +880 19246 9597
                </Typography>
                <Typography variant="body2">+880 17378 41420</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6.5}>
            <Card
              sx={{
                mb: 4,
                borderRadius: 3,
                backgroundColor: "white",
                height: "35%",
              }}
            >
              <CardContent
                sx={{
                  backgroundColor: "#F5F5F5",
                  borderTopRightRadius: 3,
                  borderTopLeftRadius: 3,
                }}
              >
                <Typography variant="h6">Address</Typography>
              </CardContent>
              <CardContent>
                <Button
                  variant="outlined"
                  sx={{
                    fontSize: "10px",
                    fontWeight: "bold",
                    borderRadius: "20px",
                    padding: "2px 4px",
                    mb: 1,
                    textTransform: "capitalize",
                  }}
                >
                  Primary
                </Button>
                <Typography variant="body2" sx={{ mb: 1 }}>
                  119 North Jatrabair, Dhaka 1294, Bangladesh
                </Typography>
                <Typography variant="body2">
                  420 Fariada Palace, Pallibiddut Road, Patuakhali
                </Typography>
              </CardContent>
            </Card>
            
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProfileInfo;
