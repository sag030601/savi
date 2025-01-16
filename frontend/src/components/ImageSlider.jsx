import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch random fashion images from Unsplash
    const fetchImages = async () => {
      try {
        const response = await fetch(
          "https://api.unsplash.com/photos/random?query=fashion-model&count=10&client_id=JALsqDXpy4VUVDBpn8CZdjVu_FmCw6T_snPEDsC1FFc"
        );
        const data = await response.json();
        const imageUrls = data.map((item) => item.urls.regular);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Box sx={{ maxWidth: "80%",margin:'0 auto ' }}>
      {images.length > 0 ? (
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
      ) : (
        <p>Loading images...</p>
      )}
    </Box>
  );
};

export default ImageSlider;
