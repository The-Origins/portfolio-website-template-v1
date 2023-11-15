import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const SkillCard = (props) => {
  return (
    <Link
      key={props.id}
      to={`/skill/${props.id}-${String(props.title).toLowerCase()}`}
      style={{ flexBasis: 200, flexGrow: 1, textDecoration: "none" }}
    >
      <Box
        key={props.id}
        height={"300px"}
        position={"relative"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"rgba(0 0 0 / 0.5)"}
        overflow={"hidden"}
        sx={{
          ":hover .skill-title": {
            letterSpacing: "1px",
          },
          ":hover .skill-img": {
            filter: "blur(4px)",
          },
        }}
      >
        <Typography
          className="skill-title"
          fontSize={"45px"}
          fontFamily={"roboto mono"}
          color={"white"}
          sx={{transition:"0.3s"}}
        >
          {String(props.title).toUpperCase()}
        </Typography>
        <Box
          className="skill-img"
          position={"absolute"}
          width={"100%"}
          height={"100%"}
          zIndex={-1}
          sx={{
            backgroundImage: `url(${props.image})`,
            backgroundSize: "cover",
            transition: "0.3s",
          }}
        />
      </Box>
    </Link>
  );
};

export default SkillCard;
