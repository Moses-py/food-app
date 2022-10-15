import { Box } from "@mui/material";
import FoodNameImage from "./FoodNameImage";
import { FoodImage, ImageCircleContainer } from "./styles/Main";

const ImageRight = () => {
  return (
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem",
        }}
      >
        <FoodNameImage />
        <ImageCircleContainer />
        <FoodImage
          src="./assets/image 1.svg"
          alt="Food Imag"
          className="image"
        />
      </Box>
    </Box>
  );
};

export default ImageRight;
