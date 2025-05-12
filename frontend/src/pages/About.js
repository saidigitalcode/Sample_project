import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function About() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Us
      </Typography>

      <Typography variant="body1" paragraph>
        Welcome to <strong>Sales Site</strong>, your one-stop destination for high-quality men's fashion. 
        Our mission is to bring you the latest styles in suits, casual wear, and accessories that blend 
        classic elegance with modern trends.
      </Typography>

      <Typography variant="body1" paragraph>
        We believe fashion is not just about clothing—it's about expressing confidence and individuality. 
        That's why we carefully curate our collection to ensure you always look and feel your best.
      </Typography>

      <Typography variant="body1" paragraph>
        From premium fabrics to exceptional customer service, Sales Site is committed to offering 
        a seamless shopping experience. Whether you’re dressing for a formal occasion or a relaxed weekend, 
        we’ve got you covered.
      </Typography>

      <Box mt={4}>
        <Typography variant="h6">Why Choose Us?</Typography>
        <ul style={{ lineHeight: 1.8 }}>
          <li>🧥 Hand-picked quality products</li>
          <li>🚚 Fast and reliable delivery</li>
          <li>💬 Friendly customer support</li>
          <li>🔒 Secure payment options</li>
          <li>🎁 Exciting offers and discounts</li>
        </ul>
      </Box>
    </Container>
  );
}

export default About;
