import React from "react";
import { Link } from "@mui/material";

const FooterImageLink = (props) => {
  return (
    <Link
      href={props.path}
      sx={{
        textDecoration: "none",
        color: "white",
        transition: "0.3s",
        ":hover": {
          color: "#D9D9D9",
        },
      }}
    >
      {props.icon}
    </Link>
  );
};

export default FooterImageLink;
