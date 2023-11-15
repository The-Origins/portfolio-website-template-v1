import React from 'react'
import { Box, Typography } from '@mui/material'

const HighlightComponent = (props) => {
  return (
    <Box key={props.id} display={"flex"} flexDirection={"column"} alignItems={"center"} gap={"10px"}>
        <Typography fontSize={"50px"} fontWeight={"bold"} fontFamily={"limelight"} color={"black"} textAlign={"center"}>{props.title}</Typography>
        <Typography color={"#898989"} textAlign={"center"}>{props.description}</Typography>
    </Box>
  )
}

export default HighlightComponent