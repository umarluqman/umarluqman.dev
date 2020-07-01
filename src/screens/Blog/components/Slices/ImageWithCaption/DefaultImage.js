import React from "react";
import Caption from "./Caption";
import { Box } from "@chakra-ui/core";

/**
 * Default image component
 */
const DefaultImage = ({ slice }) => {
  const imageUrl = slice.primary.image.url;
  const imageAlt = slice.primary.image.alt;
  const caption = slice?.primary?.caption;

  return (
    <Box m={2}>
      <img src={imageUrl} alt={imageAlt} />
      <Caption caption={caption} />
    </Box>
  );
};

export default DefaultImage;
