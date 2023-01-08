import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

export default function Signup() {
  const paperStyle = {
    height: "100%",
    width: 280,
    padding: 20,
    margin: "20px auto",
  };
  const avatarStyle = {
    backgroundColor: "#3287db",
  };
  const commonStyle = {
    marginTop: 15,
    marginBottom: 15,
  };
  return (
    <>
      <Grid>
        <Paper elevation={7} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Signup</h2>
          </Grid>

          <TextField
            variant="standard"
            label="Username"
            placeholder="Enter your username"
            fullWidth
            required
          />

          <TextField
            variant="standard"
            label="Password"
            placeholder="Enter your username"
            type="password"
            fullWidth
            required
            style={commonStyle}
          />
          <TextField
            variant="standard"
            label="CPassword"
            placeholder="Enter your confirm Password"
            type="password"
            fullWidth
            required
            style={commonStyle}
          />
          <TextField
            variant="standard"
            label="First Name"
            placeholder="Enter your Firstname"
            type="text"
            fullWidth
            required
            style={commonStyle}
          />
          <TextField
            variant="standard"
            label="Last Name"
            placeholder="Enter your Lastname"
            type="text"
            fullWidth
            required
            style={commonStyle}
          />
          <TextField
            variant="standard"
            label="dob"
            placeholder="Enter your date of birth"
            type="text"
            fullWidth
            required
            style={commonStyle}
          />
          <TextField
            variant="standard"
            label="age"
            placeholder="Enter your age"
            type="text"
            fullWidth
            required
            style={commonStyle}
          />
          <TextField
            variant="standard"
            label="phone Number"
            placeholder="Enter your phone number"
            type="text"
            fullWidth
            required
            style={commonStyle}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <Button variant="contained" fullWidth style={commonStyle}>
            signup
          </Button>
          <Typography>
            <Link href="#"></Link>
          </Typography>

          
        </Paper>
      </Grid>
    </>
  );
}
