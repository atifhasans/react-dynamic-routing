import { CircularProgress, Typography, Grid, Box, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <Box p={3} display="flex" justifyContent="center" alignItems="center" minHeight="95vh" sx={{ backgroundColor: '#f4f6f8' }}>
      {error && <Typography color="error">Error in fetching data</Typography>}
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" height="100%">
          <CircularProgress />
        </Box>
      )}
      {product && (
        <Paper elevation={3} sx={{ p: 3, width: '100%', maxWidth: 1000 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box component="img" src={product.thumbnail} alt={product.title} sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h4" component="h2" gutterBottom>
                  {product.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  Brand: {product.brand}
                </Typography>
                <Typography variant="body1" paragraph>
                  {product.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dimensions: Width {product.dimensions?.width || '-'}, Height {product.dimensions?.height || '-'}, Depth {product.dimensions?.depth || '-'}
                </Typography>
                <Typography variant="h5" color="primary" fontWeight="bold" mt={2}>
                  Rs. {product.price}
                </Typography>
                <Typography variant="body2" color="text.secondary" mt={1}>
                  Return Policy: {product.returnPolicy || 'Not specified'}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Shipping Information: {product.shippingInformation || 'Not specified'}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default SingleProduct;
