import React from "react";
import { Box, Button } from "@mui/material";

const ImageCard = (props) => {
  return (
    <Button
      disableRipple
      onClick={() => props.activatePlayer(props)}
      sx={{
        flexBasis: 300,
        flexGrow: 1,
        maxWidth: "550px",
        aspectRatio: props.info.aspectRatio,
      }}
    >
      <Box
        key={props.id}
        position={"relative"}
        width={"100%"}
        height={"100%"}
        overflow={"hidden"}
        sx={{
          backgroundImage: `url(${props.path})`,
          backgroundSize: "cover",
        }}
       />
    </Button>
  );
};

export default ImageCard;
