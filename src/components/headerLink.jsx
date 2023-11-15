import React from 'react'
import { Box } from '@mui/material'
import { Link } from "@mui/material";

const HeaderLink = (props) => {
  return (
    <Box position={"relative"} sx={{":hover .header-link":{
        width:"100%"
    }}}>
        <Link href={`/#${props.path}`} style={{textDecoration:"none", color:"black", margin:"20px"}}>{props.title}</Link>
        <Box className={"header-link"} sx={{height:"2px", width:0, transition:"0.3s"}} />
    </Box>
  )
}
export default HeaderLink