import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Rating,
} from "@mui/material";

const products = [
  {
    id: 1,
    name: "Product A",
    image: "https://via.placeholder.com/300x200",
    price: "$50",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Product B",
    image: "https://via.placeholder.com/300x200",
    price: "$75",
    rating: 4.2,
  },
  {
    id: 3,
    name: "Product C",
    image: "https://via.placeholder.com/300x200",
    price: "$100",
    rating: 4.8,
  },
  {
    id: 4,
    name: "Product D",
    image: "https://via.placeholder.com/300x200",
    price: "$120",
    rating: 4.7,
  },
];

const Products = () => {
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
              }}
            >
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.image}
                sx={{ borderRadius: "8px 8px 0 0" }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", textAlign: "center" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "gray", textAlign: "center", margin: "8px 0" }}
                >
                  {product.price}
                </Typography>
                <Rating
                  value={product.rating}
                  precision={0.1}
                  readOnly
                  size="small"
                  sx={{ display: "flex", justifyContent: "center" }}
                />
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 16px 16px",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  Buy Now
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  size="small"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
