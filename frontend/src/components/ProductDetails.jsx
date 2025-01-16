import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <Box sx={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h4" gutterBottom>
        Product Details
      </Typography>
      <Typography variant="body1" gutterBottom>
        Product ID: {id}
      </Typography>
      <Typography variant="body1" gutterBottom>
        (Additional product details can go here.)
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
        sx={{ marginTop: "20px" }}
      >
        Back to Products
      </Button>
    </Box>
  );
};

export default ProductDetails;
