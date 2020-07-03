import React from "react";
import { RichText } from "prismic-reactjs";
import { textColor } from "../../../../../styles/colors";
import { useColorMode, Text } from "@chakra-ui/core";
/**
 * Image caption component
 */
const Caption = ({ caption }) => {
  const { colorMode } = useColorMode();
  if (RichText.asText(caption) !== "") {
    return <Text color={textColor[colorMode]}>{RichText.asText(caption)}</Text>;
  }

  return null;
};

export default Caption;
