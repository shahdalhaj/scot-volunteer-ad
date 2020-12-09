import React, { useState } from "react";
import { signApi } from "../api/auth";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: "60vh"
  },
  image: {
    backgroundImage:
      "url(https://media.istockphoto.com/photos/group-of-people-raising-their-hands-against-a-sunset-picture-id1160644769?b=1&k=6&m=1160644769&s=170667a&w=0&h=12DEJBMzHyyUCY67nXL-ly2fHPKdov6JjWdoEp3XYyw=)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "3rem"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "orange"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: "5px",
    borderRadius: "10rem",
    border: "1px orange solid",
    backgroundColor: "orangered",
    color: "white"
  }
}));

function Login() {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const handleChange = event => {
    if (event.target.name === "email") {
      setEmail(event.target.value);
    }
    if (event.target.name === "password") {
      setPassword(event.target.value);
    }
  };
  const signIn = e => {
    e.preventDefault();
    signApi(email, password)
      .then(data => {
        const token = data.token;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(data.user));
      })
      .catch(() => {
        setError(true);
      });
  };
  const token = localStorage.getItem("token");
  if (token) {
    return <div>You are already logged in.</div>;
  } else
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={6}
          md={5}
          className={classes.image}
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "150px"
            }}
          >
            <Typography
              style={{
                color: "white",
                paddingTop: "30px",
                fontFamily: "Andalus"
              }}
            >
              Refugees & Mentors
            </Typography>
            <Typography
              style={{
                color: "white",
                padding: "15px",
                fontFamily: "Andalus",
                marginLeft: "1rem"
              }}
            >
              supports refugees and vulnerable migrants to improve their
              employment prospects and get jobs
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>

            {error ? (
              <Typography variant="subtitle2" color="error">
                Please Enter a valid username and password! Try again.
              </Typography>
            ) : null}

            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={signIn}
              >
                Log In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                disabled
              >
                Sign Up
              </Button>

              <Grid container>
                <Grid item xs>
                  {error ? <div>Wrong information. Try again</div> : null}
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
              </Grid>
              <Box mt={5}></Box>
            </form>
          </div>
        </Grid>
      </Grid>
    );
}

export default Login;
