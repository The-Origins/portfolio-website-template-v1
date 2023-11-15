import React, { useState } from "react";
import { useMediaQuery, Box, Typography, IconButton } from "@mui/material";
import { Close, Info } from "@mui/icons-material";

const Player = (props) => {
  const isNotPhone = useMediaQuery("(min-width:1000px)");

  const [isInfo, setIsInfo] = useState(false);
  const [isZoom, setIsZoom] = useState(false)

  const changeIsInfo = () => {
    setIsInfo((prev) => !prev);
  };

  const changeIsZoom = () =>
  {
    setIsZoom((prev) => !prev)
  }

  return (
    <Box
      position={"fixed"}
      width={"100%"}
      height={"100%"}
      display={props.isPlayer ? "flex" : "none"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"rgba(0 0 0 / 0.5)"}
      zIndex={2}
    >
      <Box
        width={isNotPhone ? "60%" : "90%"}
        height={"80%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        borderRadius={"20px"}
        bgcolor={"black"}
        position={"relative"}
        sx={{
          ":hover": { cursor: isZoom ? "zoom-out" : "zoom-in" },
        }}
        overflow={"hidden"}
      >
        <img
          src={props.path}
          alt=""
          style={{
            aspectRatio: props.info.aspectRatio || "3/4",
            width:
              (props.info.aspectRatio === "3/4" ||
                props.info.aspectRatio === "9/16") &&
              isNotPhone
                ? undefined
                : "100%",
            height:
              (props.info.aspectRatio === "3/4" ||
                props.info.aspectRatio === "9/16") &&
              isNotPhone
                ? "100%"
                : undefined,
            transition:"0.1s ease-in-out",
            transform:isZoom ? "scale(2)" : undefined
          }}
          onClick={changeIsZoom}
        />
        <Box
          position={"absolute"}
          top={0}
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <IconButton onClick={changeIsInfo}>
            <Info sx={{ color: "white", m:"20px"}} />
          </IconButton>
          <IconButton onClick={props.deactivatePlayer}>
            <Close sx={{ color: "white", m:"20px" }} />
          </IconButton>
        </Box>
        <Box
          position={"absolute"}
          bottom={0}
          width={"100%"}
          height={isInfo ? "30%" : 0}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ transition: "0.4s ease", bgcolor: "rgba(0 0 0 / 0.5)", borderRadius:"0px 0px 20px 20px" }}
          overflow={"hidden"}
        >
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={"min(400px, 80%)"}
            gap={"10px"}
            color={"white"}
          >
            {Object.keys(props.info).map((key, index) => (
              <Box
                width="100%"
                key={index}
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography fontSize={"0.8rem"}>{key}</Typography>
                <Typography fontSize={"0.8rem"}>{props.info[key]}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Player;
