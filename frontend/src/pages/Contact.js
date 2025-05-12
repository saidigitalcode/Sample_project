import React from 'react';
import { Container, Typography, TextField, Button, Box, Grid } from '@mui/material';

function Contact() {
  return (
    <Container sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>

      <Typography variant="body1" align="center" paragraph>
        We'd love to hear from you! Whether you have a question about our products, shipping, or anything else, 
        our team is ready to answer all your questions.
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box component="form" noValidate autoComplete="off">
            <TextField fullWidth margin="normal" label="Full Name" variant="outlined" />
            <TextField fullWidth margin="normal" label="Email" variant="outlined" />
            <TextField fullWidth margin="normal" label="Subject" variant="outlined" />
            <TextField
              fullWidth
              margin="normal"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
            />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Send Message
            </Button>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Our Office
          </Typography>
          <Typography variant="body2">📍 123 Fashion Street, Style City, India</Typography>
          <Typography variant="body2">📞 +91 98765 43210</Typography>
          <Typography variant="body2">📧 support@salesite.com</Typography>
          <Box mt={2}>
            <iframe
              title="Sales Site Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.837031926748!2d106.6754348152891!3d10.76262299233265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f1de3df14c1%3A0x2c1a2fa76cc7e5f!2sDistrict%201%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2sin!4v1621571949813!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
