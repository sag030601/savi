import React from "react";
import Slider from "react-slick";
import { Box, Typography, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const images = [
  "https://via.placeholder.com/800x400?text=Slide+1",
  "https://via.placeholder.com/800x400?text=Slide+2",
  "https://via.placeholder.com/800x400?text=Slide+3",
  "https://via.placeholder.com/800x400?text=Slide+4",
];

// Custom Arrow Components
const PrevArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      left: "10px",
      zIndex: 10,
      transform: "translateY(-50%)",
      background: "rgba(255, 255, 255, 0.8)",
      "&:hover": { background: "rgba(255, 255, 255, 1)" },
    }}
  >
    <ArrowBackIosNewIcon />
  </IconButton>
);

const NextArrow = ({ onClick }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      right: "10px",
      zIndex: 10,
      transform: "translateY(-50%)",
      background: "rgba(255, 255, 255, 0.8)",
      "&:hover": { background: "rgba(255, 255, 255, 1)" },
    }}
  >
    <ArrowForwardIosIcon />
  </IconButton>
);

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box sx={{ maxWidth: "100%" }}>
     
      <Slider {...settings}>
        {images.map((img, index) => (
          <Box key={index} sx={{ padding: "10px" }}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
