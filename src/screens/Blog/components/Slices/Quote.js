import React from "react";
import { RichText } from "prismic-reactjs";

import { Alert, useColorMode } from "@chakra-ui/core";

/**
 * Quote slice component
 */

const alertBgColor = { light: "blue.100", dark: "blue.700" };
const alertColor = { light: "blue.700", dark: "blue.100" };
const Quote = ({ slice }) => {
  const { colorMode } = useColorMode();

  return (
    <Alert
      status="info"
      variant="left-accent"
      bg={alertBgColor[colorMode]}
      borderColor="blue.500"
      id="quote"
      fontFamily="Inter"
      color={alertColor[colorMode]}
      lineHeight="taller"
      py={4}
    >
      {RichText.asText(slice.primary.quote)}
    </Alert>
  );
};

export default Quote;
