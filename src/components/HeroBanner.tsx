import React from 'react'
import { Box, Stack, Typography} from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: '22px', xs: '70px' }, ml: { sm: '50px' } }}
      position="relative"
      p="20px"
    >
      <Typography  color="#f0c300" fontWeight="800" fontSize="26px">
        Fitness GYM
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' } }}
        mb="23px"
        mt="30px"
        color="#f0c300"
      >
        Sweat, Smile <br />
        And Repeat
      </Typography>
      <Typography color="#f0c300" fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
        Check out the most effective exercises personalized to you
      </Typography>
      <Stack>
        <a
          href="#exercises"
          style={{
            marginTop: '45px',
            textDecoration: 'none',
            width: '200px',
            textAlign: 'center',
            padding: '14px',
            fontSize: '22px',
            textTransform: 'none',
            color: 'white',
            borderRadius: '4px',
          }}
        >
        </a>
      </Stack>

      <img
        src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
        />
    </Box>
  );
}

export default HeroBanner