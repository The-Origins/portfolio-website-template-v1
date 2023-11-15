import React, { useEffect, useState } from "react";
import { useMediaQuery, Box, Typography } from "@mui/material";
import { skills } from "../lib/data";
import Layout from "../components/layout";
import HighlightComponent from "../components/highlightComponent";

const Skill = () => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");
  const [index, setIndex] = useState(0);
  const [skill, setSkill] = useState({
    highlights: [],
    section1: {},
    section2: {},
  });

  useEffect(() => {
    document.title = `John Doe | ${window.location.pathname
      .substring(
        window.location.pathname.indexOf("-") + 1,
        window.location.pathname.length
      )
      .toLowerCase()}`;
    setIndex(
      Number(
        window.location.pathname
          .substring(
            window.location.pathname.indexOf("/skill/"),
            window.location.pathname.indexOf("-")
          )
          .replace("/skill/", "")
      )
    );

    setSkill(skills[index]);
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
          justifyContent={isNotPhone ? "space-evenly" : "center"}
          gap={isNotPhone ? undefined : "20px"}
          overflow={"hidden"}
        >
          <Box
            position={"absolute"}
            width={"100%"}
            height={"100%"}
            sx={{
              backgroundImage: `url(${skill.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              zIndex: -1,
              filter: "brightness(60%) blur(5px)",
              boxShadow: "0px 0px 0px 0px black",
              transform: "scale(1.05)",
            }}
          />
          <Typography
            fontFamily={"limelight"}
            variant="h1"
            fontSize={"clamp(3rem, 10vw, 7rem)"}
            color={"white"}
          >
            {skill.title}
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"} width={"100%"}>
          <Box
            width={isNotPhone ? "70%" : "90%"}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              height={"60vh"}
              mt={"50px"}
              position={"relative"}
            >
              {isNotPhone && (
                <Box
                  position={isNotPhone ? undefined : "absolute"}
                  width={isNotPhone ? "50%" : "100%"}
                  height={isNotPhone ? "80%" : "100%"}
                  sx={{
                    backgroundImage: `url(${skill.section1.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    filter: isNotPhone
                      ? undefined
                      : "blur(5px) brightness(50%)",
                    transform: isNotPhone ? undefined : "scale(1.2)",
                    zIndex: -1,
                  }}
                />
              )}
              <Box
                width={isNotPhone ? "40%" : "100%"}
                height={"80%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                textAlign={"center"}
                  lineHeight={"40px"}
                  sx={{
                    "& > span": {
                      fontSize: "60px",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <span>{String(skill.section1.description).charAt(0)}</span>
                  {String(skill.section1.description).substring(
                    1,
                    String(skill.section1.description).length
                  )}
                </Typography>
              </Box>
            </Box>
            <Box
              display={"flex"}
              width={isNotPhone ? "60%" : "100%"}
              height={"40vh"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              {skill.highlights.map((highlight, index) => (
                <HighlightComponent id={index} {...highlight} />
              ))}
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              height={"60vh"}
              mb={"60px"}
              position={"relative"}
            >
              <Box
                width={isNotPhone ? "40%" : "100%"}
                height={"80%"}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Typography
                  textAlign={"center"}
                  lineHeight={"40px"}
                  sx={{
                    "& > span": {
                      fontSize: "60px",
                      fontWeight: "bold",
                    },
                  }}
                >
                  <span>{String(skill.section2.description).charAt(0)}</span>
                  {String(skill.section2.description).substring(
                    1,
                    String(skill.section2.description).length
                  )}
                </Typography>
              </Box>
              {isNotPhone && (
                <Box
                  position={isNotPhone ? undefined : "absolute"}
                  width={isNotPhone ? "50%" : "100%"}
                  height={isNotPhone ? "80%" : "100%"}
                  sx={{
                    backgroundImage: `url(${skill.section2.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    filter: isNotPhone
                      ? undefined
                      : "blur(5px) brightness(50%)",
                    transform: isNotPhone ? undefined : "scale(1.2)",
                    zIndex: -1,
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Skill;
