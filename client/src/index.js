import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import Footer from "./components/Footer";
import Login from "./components/Login";
import BlocksList from "./components/BlocksList";
import Topics from "./components/Topics";
import NewTopic from "./components/NewTopic";
import Assessment from "./components/Assessment";
import Confirmation from "./components/Confitmation";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { AppBar } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Topic from "./components/Topic";

const logout = e => {
  e.preventDefault();
  localStorage.removeItem("token");
  document.location.reload();
};

const Routes = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const TOKEN = localStorage.getItem("token");

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SecuredRoute = props => (
    <>
      {localStorage.getItem("token") ? (
        props.children
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );

  return (
    <Router>
      <div className="App">
        <AppBar
          position="sticky"
          style={{ height: "70px", backgroundColor: "white" }}
        >
          {TOKEN && (
            <div>
              <MenuIcon
                className="menuicon"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{
                  color: "#ff7a3dfd",
                  marginLeft: "81rem",
                  marginTop: "1rem"
                }}
              ></MenuIcon>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <Link
                    className="nav-link"
                    style={{ color: "#ff7a3dfd", backgroundColor: "white" }}
                    to="/"
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    className="nav-link"
                    style={{ color: "#ff7a3dfd", backgroundColor: "white" }}
                    to="/about"
                  >
                    About
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    className="nav-link"
                    style={{ color: "#ff7a3dfd", backgroundColor: "white" }}
                    to="/status"
                  >
                    Status
                  </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link
                    className="nav-link"
                    style={{ color: "#ff7a3dfd", backgroundColor: "white" }}
                    to="/blocks"
                  >
                    Blocks
                  </Link>
                </MenuItem>
                {localStorage.getItem("token") ? (
                  <MenuItem
                    onClick={e => {
                      logout(e);
                      handleClose();
                    }}
                  >
                    <Link
                      className="nav-link"
                      style={{ color: "#ff7a3dfd", backgroundColor: "white" }}
                      to="/Login"
                    >
                      Logout
                    </Link>
                  </MenuItem>
                ) : (
                  <MenuItem
                    onClick={() => {
                      handleClose();
                    }}
                  >
                    <Link
                      className="nav-link"
                      style={{ color: "#ff7a3dfd", backgroundColor: "white" }}
                      to="/Login"
                    >
                      Login
                    </Link>
                  </MenuItem>
                )}
              </Menu>
            </div>
          )}
          {TOKEN && (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <img
                style={{
                  height: "60px",
                  position: "relative",
                  right: "72rem",
                  bottom: "44px",
                  borderRadius: "20%"
                }}
                className="logo-img"
                src="https://refmentors.org.uk/wp-content/uploads/2019/12/cropped-thumbnail_FB_cover-image_amend-final-Copy.jpg"
                alt="RefMentors icon"
              />
            </div>
          )}
          {!TOKEN && (
            <img
              style={{
                height: "60px",
                position: "absolute",
                left: "4px",
                top: "4px",
                borderRadius: "20%"
              }}
              className="logo-img"
              src="https://refmentors.org.uk/wp-content/uploads/2019/12/cropped-thumbnail_FB_cover-image_amend-final-Copy.jpg"
              alt="RefMentors icon"
            />
          )}
        </AppBar>
        <div>
          <Route path="/" exact component={Home} />
          <SecuredRoute>
            <Route exact path="/about/" component={About}></Route>
            <Route exact path="/status/" component={Status}></Route>
            <Route exact path="/blocks/" component={BlocksList}></Route>
            <Route exact path="/topics/" component={Topics}></Route>
            <Route exact path="/topics/:id" component={Topic}></Route>
            <Route exact path="/createtopic" component={NewTopic}></Route>
            <Route exact path="/assessment" component={Assessment}></Route>
            <Route exact path="/confirmation" component={Confirmation}></Route>
          </SecuredRoute>
          <Route path="/login/" component={Login} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));
