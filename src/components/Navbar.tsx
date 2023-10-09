import React from 'react'
import {Link} from 'react-router-dom'
import {Stack} from '@mui/material'
import logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-around"
      sx={{
        gap: { sm: "122px", xs: "40px" },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px"
    >

    </Stack>
  );
}

export default Navbar