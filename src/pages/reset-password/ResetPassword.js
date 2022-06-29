import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {
  useNavigate
} from 'react-router-dom'

export default function ResetPassword() {
  const [showErr, setShowErr] = React.useState(false)
  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // // console.log({
    // //   email: data.get('role'),
    // //   password: data.get('password'),
    // // });
    // const email = data.get('email')
    // const code = data.get('code')
    // const password = data.get('password')
    // resetPassword(email, code, password)
    // .then(res => {
    //   console.log(res)
    //   setShowErr(false)
    //   navigate('/login')
    // })
    // .catch(err => {
    //   setShowErr(true)
    //   console.log(err.response.data.error)
    // })
    navigate('/login')
  };


  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />


        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>

          {showErr && (
            <Typography variant='body1' color="red" >
              Something went wrong, try again!
            </Typography>
          )}

          {/* form */}
          <Box component="form" 
          onSubmit={handleSubmit}
           sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="code"
                  label="code"
                  type="code"
                  id="code"
                  autoComplete="new-code"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
          </Box>
        </Box>
      </Container>
  );
}
