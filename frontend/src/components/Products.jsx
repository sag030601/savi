import React, { useEffect, useState } from "react";
import { Box, Grid, Card, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=fashion-model&count=4&client_id=${JALsqDXpy4VUVDBpn8CZdjVu_FmCw6T_snPEDsC1FFc}`
      );
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        const productData = data.map((item, index) => ({
          id: index + 1,
          name: `Product ${String.fromCharCode(65 + index)}`,
          image: item.urls.regular,
          price: `$${(50 + index * 25).toFixed(2)}`,
          rating: (Math.random() * (5 - 3.5) + 3.5).toFixed(1),
        }));
        setProducts(productData);
      } else {
        console.error("Unexpected data format:", data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#1976d2" }}
      >
        Our Products
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                maxWidth: 300,
                margin: "auto",
                borderRadius: 2,
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
                cursor: "pointer",
              }}
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <CardMedia
                component="img"
                alt={product.name}
                height="350"
                image={product.image}
                sx={{ borderRadius: "8px 8px 0 0" }}
              />
              <Box sx={{ padding: "10px" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "gray" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ fontWeight: "bold", color: "gray" }}
                >
                  {product.price}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
