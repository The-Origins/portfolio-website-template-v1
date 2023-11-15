import React from "react";
import { Box, Typography } from "@mui/material";
import { Place, CalendarToday } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <Link
      key={props.id}
      to={`/project/${props.id}-${String(props.title).split(" ").join("-").toLowerCase()}`}
      style={{
        flexBasis: 300,
        flexGrow: 1,
        textDecoration: "none",
        fontFamily: "roboto mono",
        maxWidth:"550px"
      }}
    >
      <Box
        key={props.id}
        height={"300px"}
        display={"flex"}
        justifyContent={"flex-start"}
        alignItems={"flex-end"}
        position={"relative"}
        overflow={"hidden"}
        sx={{
          ":hover .project-img": {
            transform: "scale(1.1)",
            filter:"blur(1px)"
          },
          ":hover": {
            boxShadow: "0px 0px 10px 1px #797979",
          },
        }}
      >
        <Box
          className="project-img"
          position={"absolute"}
          width={"100%"}
          height={"100%"}
          sx={{
            backgroundImage: `url(${props.banner})`,
            backgroundSize: "cover",
            filter: "brightness(70%)",
            zIndex: -1,
            transition: "0.3s",
          }}
        />
        <Box
          className="project-desc"
          margin={"20px"}
          display={"flex"}
          flexDirection={"column"}
          gap={"5px"}
          sx={{ color: "white", transition: "0.3s" }}
        >
          <Typography
            fontWeight={"bold"}
            fontFamily={"roboto mono"}
            fontSize={"20px"}
          >
            {props.title}
          </Typography>
          <Box display={"flex"} alignItems={"center"}>
            <CalendarToday sx={{ fontSize: "13px", mr: "5px" }} />
            <Typography color={"#D9D9D9"} fontSize={"13px"} fontFamily={"roboto mono"}>
              {props.date}
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Place sx={{ fontSize: "13px", mr: "5px" }} />
            <Typography color={"#D9D9D9"} fontSize={"13px"} fontFamily={"roboto mono"}>
              {props.location.city}, {props.location.country}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Link>
  );
};

export default ProjectCard;
