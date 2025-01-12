import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import StoreIcon from "@mui/icons-material/Store";
import { useSpring, animated } from "@react-spring/web";


// Data for features
const featuresData = [
  {
    icon: <ShoppingBagIcon sx={{ fontSize: 50 }} />,
    title: "Collections",
    description: "Explore exclusive and diverse collections.",
    color: "#1976d2",
  },
  {
    icon: <StoreIcon sx={{ fontSize: 50 }} />,
    title: "Brands",
    description: "Top-notch brands at your fingertips.",
    color: "#d32f2f",
  },
  {
    icon: <WhatshotIcon sx={{ fontSize: 50 }} />,
    title: "Trends",
    description: "Always stay ahead of the latest trends.",
    color: "#f57c00",
  },
  {
    icon: <LocalOfferIcon sx={{ fontSize: 50 }} />,
    title: "Exclusive Offers",
    description: "Unbeatable deals, just for you.",
    color: "#388e3c",
  },
];

const Features = () => {
  // Animation config
  const springProps = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 120, friction: 14 },
  });

  return (
    <Box
      sx={{
        padding: "50px",
        backgroundColor: "#f5f5f5",
        textAlign: "center",
      }}
    >
      <animated.div style={springProps}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            marginBottom: "30px",
            color: "#333",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Why Choose Us?
        </Typography>
      </animated.div>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          marginTop: "20px",
        }}
      >
        {featuresData.map((feature, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <animated.div
              style={{
                ...springProps,
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <Card
                sx={{
                  maxWidth: "250px",
                  textAlign: "center",
                  padding: "20px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  background: "white",
                  "&:hover": {
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease-in-out",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "15px",
                    color: feature.color,
                  }}
                >
                  {feature.icon}
                </Box>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "10px",
                      color: "#444",
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", fontSize: "14px" }}
                  >
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </animated.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
