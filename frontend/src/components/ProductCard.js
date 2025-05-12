import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
  CardActions,
} from '@mui/material';

function ProductCard({ product, onEdit, onDelete }) {
  return (
    <Card sx={{ 
      width: 220,        // Set fixed width
      height: 350,       // Set fixed height
      m: 2,              // Margin around each card
      borderRadius: 3,   
      boxShadow: 3,
      display: 'flex', 
      flexDirection: 'column',
    }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" sx={{fontWeight:'bold'}}>
          {product.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" color="text.secondary">
            Qty: {product.quantity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ₹{product.price}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
        <Button size="small" onClick={() => onEdit(product)} sx={{backgroundColor:'rgb(17, 156, 199)',color:'white'}}>Edit</Button>
        <Button size="small" color="error" onClick={() => onDelete(product.id)} sx={{backgroundColor:'rgb(234, 74, 63)',color:'white'}}>Delete</Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
