import React from "react";
import { MenuItem, Typography } from "@mui/material";

const MenuElement = (props) => {
  return (
    <a href={`/${props.path}`} style={{textDecoration:"none", }}>
      <MenuItem sx={{ fontSize: "25px" }} onClick={props.changeMenu}>
        <Typography sx={{ fontSize: "20px", color:"black" }}  textAlign={"center"}>{props.title}</Typography>
      </MenuItem>
    </a>
  );
};

export default MenuElement;
