import React from "react";
import { RichText } from "prismic-reactjs";

import { Alert } from "@chakra-ui/core";

/**
 * Quote slice component
 */
const Quote = ({ slice }) => (
  <Alert
    status="info"
    variant="left-accent"
    bg="blue.50"
    borderColor="blue.500"
    id="quote"
    fontFamily="Inter"
  >
    {RichText.asText(slice.primary.quote)}
  </Alert>
);

export default Quote;
