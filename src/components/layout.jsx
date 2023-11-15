import React, { useEffect, useState } from "react";
import {
  useMediaQuery,
  Box,
  Divider,
  Link,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import {
  Copyright,
  Twitter,
  LinkedIn,
  Instagram,
  YouTube,
  MenuOutlined,
  Close,
} from "@mui/icons-material";
import HeaderLink from "./headerLink";
import FooterLink from "./footerLink";
import FooterImageLink from "./footerImageLink";
import MenuElement from "./menuElement";
import "../index.css";

const Layout = ({ children }) => {
  const [scroll, setScroll] = useState(0);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  const changeIsMenuToggled = () => {
    setIsMenuToggled((prev) => !prev);
  };

  useEffect(() => {
    window.onscroll = () => {
      setScroll(window.scrollY);
    };
    return () => (window.onscroll = undefined);
  }, []);

  return (
    <Box fontFamily={"roboto mono"}>
      <header
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          top: 0,
          left: 0,
          height: "60px",
          width: "100%",
          transition: "0.3s",
          backgroundColor: "white",
          opacity: scroll > 300 ? 1 : 0,
          zIndex: 1,
        }}
      >
        <Box
          width={isNotPhone ? "70%" : "90%"}
          height={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Link
            href="/"
            fontFamily={"limelight"}
            variant="h2"
            fontSize={"clamp(1rem, 10vw, 2.5rem)"}
            sx={{
              textDecoration: "none",
              color: "black",
            }}
          >
            John Doe
          </Link>
          {isNotPhone ? (
            <nav>
              <Box display={"flex"} gap={"20px"} alignItems={"center"}>
                <HeaderLink path="about" title="About" />
                <HeaderLink path="projects" title="Projects" />
                <HeaderLink path="skills" title="Skills" />
                <HeaderLink path="contacts" title="Contacts" />
              </Box>
            </nav>
          ) : (
            <IconButton onClick={changeIsMenuToggled}>
              {isMenuToggled ? <Close /> : <MenuOutlined />}
            </IconButton>
          )}
          {!isNotPhone && (
            <div
              className="menu"
              style={{
                right: 0,
                position: "fixed",
                top: 60,
                width: "100%",
                transition: "0.5s ease",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: isMenuToggled ? "40%" : 0,
                overflow:"hidden"
              }}
            >
              <Box
                width={"80%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
              >
                <MenuElement
                  title="About Me"
                  changeMenu={changeIsMenuToggled}
                  path="#about"
                />
                <MenuElement
                  title="Projects"
                  changeMenu={changeIsMenuToggled}
                  path="#projects"
                />
                <MenuElement
                  title="Skills"
                  changeMenu={changeIsMenuToggled}
                  path="#skills"
                />
                <Divider />
                <Link href="/#contacts" sx={{ textDecoration: "none" }}>
                  <Button
                    onClick={changeIsMenuToggled}
                    sx={{
                      m: "30px 0px",
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
                    }}
                  >
                    Contact me
                  </Button>
                </Link>
              </Box>
            </div>
          )}
        </Box>
      </header>
      {children}
      <footer>
        <Box
          minHeight={"50vh"}
          bgcolor={"black"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Box
            width={isNotPhone ? "70%" : "90%"}
            display={"flex"}
            flexDirection={"column"}
            gap={"30px"}
            alignItems={"center"}
            color={"white"}
          >
            <Link
              href="/"
              fontFamily={"limelight"}
              variant="h2"
              fontSize={"clamp(1rem, 10vw, 2.5rem)"}
              sx={{
                textDecoration: "none",
                color: "white",
              }}
            >
              John Doe
            </Link>
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-evenly"}
            >
              <FooterLink path="about" title="About" />
              <FooterLink path="projects" title="Projects" />
              <FooterLink path="skills" title="Skills" />
              <FooterLink path="contacts" title="Contacts" />
            </Box>
            <Divider />
            <Box width={"50%"} display={"flex"} justifyContent={"space-evenly"}>
              <FooterImageLink
                path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/"
                icon={<Twitter />}
              />
              <FooterImageLink
                path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/"
                icon={<Instagram />}
              />
              <FooterImageLink
                path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/"
                icon={<LinkedIn />}
              />
              <FooterImageLink
                path="https://www.linkedin.com/in/joshua-kanyori-67b83428b/"
                icon={<YouTube />}
              />
            </Box>
          </Box>
        </Box>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          color={"white"}
          bgcolor={"black"}
        >
          <Copyright sx={{ fontSize: "14px" }} />
          <Typography fontWeight={"light"} fontSize={"12px"}>
            Copyright 2023 | Wegah Studios
          </Typography>
        </Box>
      </footer>
    </Box>
  );
};

export default Layout;
