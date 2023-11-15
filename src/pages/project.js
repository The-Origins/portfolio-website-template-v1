import React, { useEffect, useState } from "react";
import { useMediaQuery, Box, Typography } from "@mui/material";
import { Place, CalendarToday } from "@mui/icons-material";
import { projects } from "../lib/data";
import Layout from "../components/layout";
import ImageCard from "../components/imageCard";
import Player from "../components/player";

const Project = () => {
  const [index, setIndex] = useState(0);
  const [project, setProject] = useState({ location: {}, images:[], });
  const [isPlayer, setIsPlayer] = useState(false)
  const [focusImage, setFocusImage] = useState({info:{}})

  const activatePlayer = (image) =>
  {
    setFocusImage(image)
    setIsPlayer(true)
  }

  const deactivatePlayer = () =>
  {
    setIsPlayer(false)
  }

  const isNotPhone = useMediaQuery("(min-width:1000px)")

  useEffect(() => {
    document.title = `John Doe | ${window.location.pathname
      .substring(
        window.location.pathname.indexOf("-") + 1,
        window.location.pathname.length
      )
      .split("-")
      .join(" ")}`;
    setIndex(
      Number(
        String(window.location.pathname)
          .substring(
            String(window.location.pathname).indexOf("/project/"),
            String(window.location.pathname).indexOf("-")
          )
          .replace("/project/", "")
      )
    );
    setProject(projects[index]);
  }, [index]);
  return (
    <Layout>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}> 
        <Box
          position={"relative"}
          height={"40vh"}
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={isNotPhone ? "space-evenly" : 'center'}
          gap={isNotPhone ? undefined : '20px'}
          overflow={"hidden"}
        >
          <Box
            position={"absolute"}
            width={"100%"}
            height={"100%"}
            sx={{
              backgroundImage: `url(${project.banner})`,
              backgroundSize: "cover",
              backgroundPosition:"center center",
              zIndex: -1,
              filter:"brightness(55%) blur(5px)",
              boxShadow:"0px 0px 0px 0px black",
              transform:"scale(1.05)",
            }}
          />
          <Typography
            fontFamily={"limelight"}
            variant="h1"
            fontSize={"clamp(3rem, 10vw, 7rem)"}
            color={"white"}
          >
            {project.title}
          </Typography>
          <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Place sx={{ fontSize: "20px", color:"white" }} />
            <Typography
              color={"#D9D9D9"}
              fontSize={"clamp(0.2rem, 4vw, 1.4rem)"}
              fontFamily={"roboto mono"}
              letterSpacing={'clamp(3px, 3vw, "10px")'}
            >
              {project.location.city}, {project.location.country}
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"} gap={"13px"}>
            <CalendarToday sx={{ fontSize: "20px", color:"white" }} />
            <Typography
              color={"#D9D9D9"}
              fontSize={"clamp(0.2rem, 3vw, 1rem)"}
              fontFamily={"roboto mono"}
              letterSpacing={'clamp(3px, 3vw, "5px")'}
            >
              {project.date}
            </Typography>
          </Box>
        </Box>
        <Box height={"40vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Typography width={isNotPhone ? "70%" : "90%"} textAlign={"center"}>{project.description}</Typography>
        </Box>
        <Box minHeight={"100vh"} width={isNotPhone ? "70%" : "90%"} display={"flex"} flexWrap={"wrap"} gap={"20px"} mb={"100px"}>
          {project.images.map((image, index) => (
            <ImageCard id={index} {...image} activatePlayer={activatePlayer} />
          ))}
        </Box>
        <Player isPlayer={isPlayer} deactivatePlayer={deactivatePlayer} {...focusImage} />
      </Box>
    </Layout>
  );
};

export default Project;
