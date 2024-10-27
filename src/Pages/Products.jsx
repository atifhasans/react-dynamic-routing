import { CircularProgress, Typography, Container, Grid, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MultiActionAreaCard from '../components/Card';

const Products = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(res => {
        console.log(res.products);
        setProduct(res.products);
      })
      .catch(err => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  const SingleProduct = (items) => {
    navigate(`/product/${items.id}`);
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 4 }}>
      {error && (
        <Typography variant="h6" color="error" align="center" gutterBottom>
          Error fetching data. Please try again.
        </Typography>
      )}
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
          <CircularProgress size={60} />
        </Box>
      )}
      {!loading && !error && (
        <>
          <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
            ALL PRODUCTS
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {product && product.map((items) => (
              <Grid item xs={12} sm={6} md={4} key={items.id}>
                <MultiActionAreaCard
                  title={items.title}
                  description={items.description}
                  src={items.thumbnail}
                  price={items.price}
                  func={() => SingleProduct(items)}
                />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Container>
  );
};

export default Products;
