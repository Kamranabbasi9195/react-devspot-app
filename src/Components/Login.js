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

export default function Login() {
  const paperStyle = {
    height: "70vh",
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
            <h2>Login</h2>
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
            placeholder="Enter your password"
            type="password"
            fullWidth
            required
            style={commonStyle}
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Remember me"
          />
          <Button variant="contained" fullWidth style={commonStyle}>
            Login
          </Button>
          <Typography>
            <Link href="#">Forget Password </Link>
          </Typography>

          <Typography style={commonStyle}>
            Don't have account? <Link href="#">Create Account </Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
