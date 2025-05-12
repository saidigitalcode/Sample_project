import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const mensClothingImages = [
  'https://media.istockphoto.com/id/887360960/photo/mens-suits-on-hangers-in-different-colors.jpg?s=612x612&w=0&k=20&c=RR19yJjRuR-CBWj9u1sQkFgtdYJ07KEkM678R0mtuZY=',
  'https://media.istockphoto.com/id/665032164/photo/flat-lay-of-modern-mens-clothing-on-a-wooden-background.jpg?s=612x612&w=0&k=20&c=CVqFStPc5EDNHIqnpYKPm-DaImQVf2VDjl54oPBavK4=',
  'https://media.istockphoto.com/id/504742864/photo/stylish-business-clothing-for-businessman.jpg?s=612x612&w=0&k=20&c=AsGrhEMNkmpwqaJPBSACPthMuBsmsDIecRkdFXKSnl0=',
  'https://media.istockphoto.com/id/1293366109/photo/this-one-match-perfect-with-me.jpg?s=612x612&w=0&k=20&c=wJ6yYbRrDfdmoViuQkX39s2z_0lCiNQYgEtLU--0EbY=',
  'https://images.squarespace-cdn.com/content/v1/5a6de17edc2b4ae0606ff8da/1675203751249-QVLKEORZXTLN37Y36EDQ/2-DSC07314.jpg?format=1500w',
];

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <Container sx={{ mt: 8 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Welcome to Sales Site
      </Typography>
      <Slider {...settings}>
        {mensClothingImages.map((img, index) => (
          <Box key={index} sx={{ p: 2 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, boxShadow: '0px 0px 15px rgba(0,0,0,0.3)' }}
              transition={{ duration: 0.5 }}
              style={{ borderRadius: '10px', overflow: 'hidden' }}
            >
              <Box
                component="img"
                src={img}
                alt={`Men Clothing ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  transition: 'transform 0.3s ease',
                }}
              />
            </motion.div>
          </Box>
        ))}
      </Slider>
    </Container>
  );
}

export default Home;
