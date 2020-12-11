import { Typography } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <div
      className="footer"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        height: "120px",
        fontFamily: "Georgia",
        padding: "10px",
        fontSize: "small",
        fontWeight: "900",
        fontStyle: "inherit",
        color: "black",
        backgroundSize: "cover",
        overflow: "hidden",
        backgroundImage:
          'url("https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/Vv03xyNwg/videoblocks-yellow-orange-watercolor-background_rmw0btyam_thumbnail-1080_05.png")'
      }}
    >
      <div>
        <Typography
          style={{
            fontWeight: 800,
            fontFamily: "Georgia"
          }}
        >
          RefMentors Team :
        </Typography>
        <Typography
          style={{
            fontWeight: "bold",
            fontFamily: "Georgia"
          }}
        >
          Shahd Alhaj
        </Typography>
        <Typography
          style={{
            fontWeight: "bold",
            fontFamily: "Georgia"
          }}
        >
          Razan Kal Omar
        </Typography>
        <Typography
          style={{
            fontWeight: "bold",
            fontFamily: "Georgia"
          }}
        >
          Mohamed Al Hallaq
        </Typography>
      </div>
      <div>
        <img
          src="https://codeyourfuture.io/wp-content/uploads/2019/03/cyf_brand.png"
          alt="CYF logo"
          height="60"
          width="150"
        />
        <Typography
          style={{
            fontWeight: "bold",
            fontFamily: "'Brush Script MT','cursive'",
            fontSize: "28px"
          }}
        >
          @CodeYourFuture&copy;
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
