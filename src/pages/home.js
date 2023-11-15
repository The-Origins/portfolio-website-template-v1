import React, { useEffect, useState } from "react";
import { useMediaQuery, Box, Typography, Link, Button } from "@mui/material";
import profileImg from "../assets/person.jpg";
import aboutImg from "../assets/person2.jpg";
import {
  PhotoCamera,
  PhoneInTalk,
  Mail,
  Instagram,
  ArrowRightAlt,
  ArrowDownward,
  ArrowUpward,
} from "@mui/icons-material";
import ProjectCard from "../components/projectCard";
import SkillCard from "../components/skillCard";
import { projects } from "../lib/data";
import { skills } from "../lib/data";
import Layout from "../components/layout";

const Home = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);
  const [expandProjects, setExpandProjects] = useState(false);
  const projectLimit = 5;

  const changeExpandProjects = () => {
    setExpandProjects((prev) => !prev);
  };

  useEffect(() => {
    document.title = "John Doe | Home";
  }, []);

  const isNotPhone = useMediaQuery("(min-width:1000px)");

  return (
    <Layout>
      <Box>
        <Box position={"relative"} height={"100vh"}>
          <Box
            position={"absolute"}
            width={isNotPhone ? "50%" : "100%"}
            height={"100%"}
            left={0}
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            gap={isNotPhone ? "100px" : "50px"}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              color={isNotPhone ? undefined : "white"}
              gap={isNotPhone ? undefined : "20px"}
            >
              <Typography
                fontFamily={"limelight"}
                variant="h1"
                fontSize={"clamp(4rem, 10vw, 7rem)"}
              >
                John Doe
              </Typography>
              <Typography
                width={"60%"}
                textAlign={"center"}
                color={isNotPhone ? "#898989" : "#D9D9D9"}
                fontFamily={"roboto mono"}
              >
                Professional photographer and videographer
              </Typography>
              {isNotPhone && (
                <PhotoCamera sx={{ fontSize: "50px", mt: "50px" }} />
              )}
            </Box>
            <Link
              href="#projects"
              sx={{
                textDecoration: "none",
                color: "white",
                width: "200px",
                height: "50px",
                bgcolor: "black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "10px",
                border: " 1px solid black",
                transition: "0.3s",
                ":hover": {
                  bgcolor: "white",
                  color: "black",
                },
                ":hover .arrow": {
                  ml: "10px",
                },
              }}
            >
              VIEW MY WORK
              <ArrowRightAlt
                className="arrow"
                sx={{ color: "black", transition: "0.3s" }}
              />
            </Link>
          </Box>
          <Box
            sx={{
              width: isNotPhone ? "50%" : "100%",
              height: "100%",
              position: "absolute",
              right: 0,
              zIndex: -1,
              bgcolor: "#898989",
            }}
          >
            <Box
              sx={{
                top: isNotPhone ? 100 : 0,
                left: isNotPhone ? 50 : 0,
                position: "absolute",
                backgroundImage: `url(${profileImg})`,
                backgroundSize: "cover",
                width: isNotPhone ? "60%" : "100%",
                height: isNotPhone ? "600px" : "100%",
                filter: isNotPhone ? undefined : "blur(4px) brightness(50%)",
              }}
            />
            {isNotPhone && (
              <Box
                sx={{
                  position: "absolute",
                  top: 70,
                  left: 90,
                  width: "max(70%, 300px)",
                  height: "660px",
                  bgcolor: "black",
                  zIndex: -2,
                }}
              />
            )}
          </Box>
        </Box>
        <Box
          id="about"
          minHeight={"100vh"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          mb={"50px"}
        >
          <Typography
            variant="h2"
            fontFamily={"limelight"}
            marginTop={"120px"}
            fontSize={"clamp(2rem, 10vw, 3.5rem)"}
            mb={isNotPhone ? "120px" : "40px"}
          >
            About Me
          </Typography>
          <Box
            position={"relative"}
            width={isNotPhone ? "70%" : "90%"}
            display={"flex"}
            justifyContent={"space-between"}
          >
            {isNotPhone && (
              <Box
                width={"40%"}
                height={"400px"}
                sx={{
                  backgroundImage: `url(${aboutImg})`,
                  backgroundSize: "cover",
                  width: isNotPhone ? "40%" : "100%",
                  filter: isNotPhone ? undefined : "brightness(50%)",
                }}
              />
            )}
            <Box
              width={isNotPhone ? "50%" : "100%"}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
            >
              <Typography
                fontFamily={"roboto mono"}
                textAlign={isNotPhone ? undefined : "center"}
                sx={{
                  width: "90%",
                  "& > span": {
                    fontFamily: "limelight",
                    fontSize: "40px",
                  },
                }}
              >
                {" "}
                <span>I</span>m a dedicated professional photographer and
                videographer deeply in love with the artistry of nature. With a
                keen eye for detail and a heart captivated by the wonders of the
                natural world, I have made it my life's mission to capture the
                beauty of our planet through the lens. My journey into
                photography and videography began as a mere hobby, but it
                quickly transformed into a profound passion and a lifelong
                commitment. Nature, with its ever-changing moods, intricate
                patterns, and vibrant colors, serves as my ultimate muse. I find
                inspiration in the dance of sunlight through leaves, the
                symphony of waves crashing against the shore, and the silent
                elegance of a snow-capped mountain at dawn.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          id={"projects"}
          minHeight={"100vh"}
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Typography
            variant="h2"
            fontFamily={"limelight"}
            marginTop={"80px"}
            fontSize={"clamp(2rem, 10vw, 3.5rem)"}
            mb={isNotPhone ? "100px" : "40px"}
          >
            My Work
          </Typography>
          <Box
            display={"flex"}
            width={isNotPhone ? "70%" : "90%"}
            flexWrap={"wrap"}
            gap={"20px"}
            sx={{ transition: " all 0.5s ease" }}
          >
            {projects.map((project, index) => {
              if (index < projectLimit || expandProjects) {
                return <ProjectCard id={index} {...project} />;
              }
              return undefined;
            })}
          </Box>
          {projects.length > projectLimit && (
            <Button
              variant="outlined"
              onClick={changeExpandProjects}
              endIcon={expandProjects ? <ArrowUpward /> : <ArrowDownward />}
              sx={{
                m: "50px",
                color: "black",
                border: "1px solid black",
                transition: "0.3s",
                overflow: "hidden",
                ":hover": { bgcolor: "black", color: "white" },
              }}
            >
              {expandProjects ? "Less" : "More projects"}
            </Button>
          )}
        </Box>
        <Box
          id={"skills"}
          minHeight={"80vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography
            variant="h2"
            fontFamily={"limelight"}
            marginTop={"120px"}
            fontSize={"clamp(2rem, 10vw, 3.5rem)"}
            mb={isNotPhone ? "120px" : "40px"}
          >
            My Skills
          </Typography>
          <Box
            display={"flex"}
            width={isNotPhone ? "70%" : "90%"}
            flexWrap={"wrap"}
            gap={"20px"}
          >
            {skills.map((skill, index) => (
              <SkillCard id={index} {...skill} />
            ))}
          </Box>
        </Box>
        <Box
          id={"contacts"}
          height={"80vh"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Typography
            variant="h2"
            fontFamily={"limelight"}
            marginTop={"120px"}
            fontSize={"clamp(2rem, 10vw, 3.5rem)"}
            mb={isNotPhone ? "120px" : "40px"}
          >
            Contact Me
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"space-evenly"}
            width={isNotPhone ? "70%" : "90%"}
            flexWrap={"wrap"}
            gap={"20px"}
          >
            {isNotPhone ? (
              <button
                onClick={() => {
                  setShowPhone((prev) => !prev);
                }}
                style={{
                  backgroundColor: "white",
                  flexBasis: 200,
                  padding: 0,
                  height: "200px",
                  border: "1px solid #797979",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "50%",
                  color: "black",
                  transition: "0.3s",
                }}
              >
                <Box
                  height="100%"
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"relative"}
                  overflow={"hidden"}
                  color={"black"}
                  sx={{
                    transition: "0.3s",
                    ":hover": {
                      bgcolor: "black",
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    width={"80%"}
                    gap={"15px"}
                  >
                    <PhoneInTalk />
                    <Typography fontSize={"15px"}>BY PHONE</Typography>
                  </Box>
                  <Box
                    className={"contact-info"}
                    position={"absolute"}
                    width={"100%"}
                    height={"100%"}
                    top={showPhone ? 0 : "100%"}
                    bgcolor={"black"}
                    color={"white"}
                    sx={{ transition: "0.3s" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography>+254000000000</Typography>
                  </Box>
                </Box>
              </button>
            ) : (
              <a
                href="tel:+254000000000"
                style={{
                  flexBasis: 200,
                  textDecoration: "none",
                  flexGrow: 1,
                }}
              >
                <button
                  onClick={() => {
                    setShowPhone(true);
                  }}
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    padding: 0,
                    height: isNotPhone ? "200px" : "70px",
                    border: "1px solid #797979",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: isNotPhone ? "50%" : "15px",
                    color: "black",
                    transition: "0.3s",
                  }}
                >
                  <Box
                    height="100%"
                    width={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"relative"}
                    overflow={"hidden"}
                    color={"black"}
                    sx={{
                      transition: "0.3s",
                      ":hover": {
                        bgcolor: "black",
                        color: "white",
                        cursor: "pointer",
                      },
                    }}
                  >
                    <Box
                      display={"flex"}
                      flexDirection={isNotPhone ? "column" : "row"}
                      alignItems={"center"}
                      width={"80%"}
                      gap={"15px"}
                    >
                      <PhoneInTalk />
                      <Typography fontSize={"15px"}>BY PHONE</Typography>
                    </Box>
                    <Box
                      className={"contact-info"}
                      position={"absolute"}
                      width={"100%"}
                      height={"100%"}
                      top={showPhone ? 0 : "100%"}
                      bgcolor={"black"}
                      color={"white"}
                      sx={{ transition: "0.3s" }}
                      display={"flex"}
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                    >
                      <Typography>+254000000000</Typography>
                    </Box>
                  </Box>
                </button>
              </a>
            )}
            <a
              href="mailto:me@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flexBasis: 200,
                textDecoration: "none",
                flexGrow: isNotPhone ? undefined : 1,
              }}
            >
              <button
                onClick={() => {
                  setShowEmail(true);
                }}
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  padding: 0,
                  height: isNotPhone ? "200px" : "70px",
                  border: "1px solid #797979",
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: isNotPhone ? "50%" : "15px",
                  color: "black",
                  transition: "0.3s",
                }}
              >
                <Box
                  height="100%"
                  width={"100%"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  position={"relative"}
                  overflow={"hidden"}
                  color={"black"}
                  sx={{
                    transition: "0.3s",
                    ":hover": {
                      bgcolor: "black",
                      color: "white",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Box
                    display={"flex"}
                    flexDirection={isNotPhone ? "column" : "row"}
                    alignItems={"center"}
                    width={"80%"}
                    gap={"15px"}
                  >
                    <Mail />
                    <Typography fontSize={"15px"}>BY EMAIL</Typography>
                  </Box>
                  <Box
                    className={"contact-info"}
                    position={"absolute"}
                    width={"100%"}
                    height={"100%"}
                    top={showEmail ? 0 : "100%"}
                    bgcolor={"black"}
                    color={"white"}
                    sx={{ transition: "0.3s" }}
                    display={"flex"}
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography>me@gmail.com</Typography>
                  </Box>
                </Box>
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/joshua-kanyori-67b83428b/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flexBasis: 200,
                textDecoration: "none",
                flexGrow: isNotPhone ? undefined : 1,
              }}
            >
              <Box
                height={isNotPhone ? "200px" : "70px"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                border={"1px solid #797979"}
                position={"relative"}
                borderRadius={isNotPhone ? "50%" : "15px"}
                color={"black"}
                sx={{
                  transition: "0.3s",
                  ":hover": {
                    bgcolor: "black",
                    color: "white",
                  },
                }}
              >
                <Box
                  display={"flex"}
                  flexDirection={isNotPhone ? "column" : "row"}
                  alignItems={"center"}
                  width={"80%"}
                  gap={"15px"}
                >
                  <Instagram />
                  <Typography fontSize={"15px"}>ON INSTAGRAM</Typography>
                </Box>
              </Box>
            </a>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Home;
