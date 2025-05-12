import React, { useEffect, useState } from 'react';
import {
  Grid,
  Container,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import ProductCard from '../components/ProductCard';
import api from '../api';

function Products() {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [form, setForm] = useState({ name: '', quantity: '', price: '', image: null, imageUrl: '' });

  const fetchProducts = async () => {
    const res = await api.get('products/');
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleOpen = (product = null) => {
    setEditingProduct(product);
    if (product) {
      setForm({ ...product, image: null, imageUrl: product.image || '' });  // Set imageUrl for the existing product
    } else {
      setForm({ name: '', quantity: '', price: '', image: null, imageUrl: '' });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingProduct(null);
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    console.log('Field:', name, 'Value:', files ? files[0] : value);  // Log the changes to see what is being set
    setForm({ ...form, [name]: files ? files[0] : value });
  };
  

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('quantity', form.quantity);
    formData.append('price', form.price);
    
    // Ensure the image is being appended correctly
    if (form.image) {
      formData.append('image', form.image);
    } else if (editingProduct && form.imageUrl) {
      // If editing, append the current image URL (or handle how the image should be sent)
      formData.append('imageUrl', form.imageUrl);
    }
  
    try {
      if (editingProduct) {
        await api.put(`products/${editingProduct.id}/`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      } else {
        await api.post('products/', formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      }
      console.log('FormData:', formData);

      formData.forEach((value, key) => {
        console.log(key, value);
      });
      
  
      fetchProducts();
      handleClose();
    } catch (error) {
      console.error('Error submitting form:', error.response);
      alert('Failed to submit the product. Please check the data and try again.');
    }
  };
  

  const handleDelete = async (id) => {
    await api.delete(`products/${id}/`);
    fetchProducts();
  };

  return (
    <Container>
      <h1>Products</h1>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{
          position: 'absolute', // To position the button absolutely
          top: 76, // Adjust the distance from the top
          right: 16, // Adjust the distance from the right side
          zIndex: 1000,
          backgroundColor: 'rgb(11, 103, 64)', // Make sure the button is on top of other elements
        }}
      >
        + Add Product
      </Button>

      <Grid container spacing={2} sx={{ marginTop: '55px' }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={3} lg={3}>
            <ProductCard
              product={product}
              onEdit={handleOpen}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{editingProduct ? 'Edit' : 'Add'} Product</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            margin="dense"
            label="Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Quantity"
            name="quantity"
            type="number"
            value={form.quantity}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="dense"
            label="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
          />
          
          {/* Show the existing image if editing */}
          {form.imageUrl && (
            <div>
              <img
                src={form.image ? URL.createObjectURL(form.image) : form.imageUrl} 
                alt="Current product"
                style={{ width: '100%', height: 'auto', marginTop: '1em' }}
              />
            </div>
          )}

          {/* File input for image */}
          <input
            type="file"
            name="image"
            onChange={handleChange}
            style={{ marginTop: '1em' }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSubmit}>
            {editingProduct ? 'Update' : 'Add'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}

export default Products;
