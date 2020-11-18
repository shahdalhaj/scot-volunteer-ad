import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Status from "./components/Status";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AppBar, Toolbar } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";



const Routes = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Router>
      <div className="App">
        <AppBar
          position="sticky"
          style={{ height: "70px", backgroundColor: "white" }}
        >
          <Toolbar style={{ display: "flex", justifyContent: "flex-end" }}>
            <div>
              <MenuIcon
                className="menuicon"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ color: "#ff7a3dfd" }}
              ></MenuIcon>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  {" "}
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
                  {" "}
                  <Link
                    className="nav-link"
                    style={{ color: "#ff7a3dfd", backgroundColor: "white" }}
                    to="/status"
                  >
                    Status
                  </Link>
                </MenuItem>
              </Menu>
            </div>
            <img
              style={{
                height: "60px",
                position: "absolute",
                left: "1px",
                top: "4px",
                borderRadius: "20%"
              }}
              className="logo-img"
              src="https://refmentors.org.uk/wp-content/uploads/2019/12/cropped-thumbnail_FB_cover-image_amend-final-Copy.jpg"
              alt="RefMentors icon"
            />
          </Toolbar>
        </AppBar>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/status/" component={Status} />
        </div>
        <Footer />
      </div>
    </Router>
  );
};

ReactDOM.render(<Routes />, document.getElementById("root"));
