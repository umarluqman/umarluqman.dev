/**@jsx jsx */
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/core";
import React from "react";
import { ChevronRight } from "react-feather";
import { jsx } from "@emotion/core";
import Router from "next/router";

const Card = ({ title, subtitle, pathname, children }) => {
  const { colorMode } = useColorMode();
  const textColor = { light: "gray.700", dark: "gray.200" };
  const backgroundColor = { light: "white", dark: "gray.700" };
  const handleClick = () => {
    Router.push(pathname);
  };
  return (
    <Flex
      direction="column"
      justify="space-between"
      p={5}
      borderRadius={8}
      boxShadow="0 10px 15px -3px rgba(3, 178, 201, 0.1),
0 4px 6px -2px rgba(3, 178, 201, 0.05)"
      bg={backgroundColor[colorMode]}
      border="2px solid transparent"
      css={{
        "&:hover": {
          border: "2px solid #16bdca",
          transition: "0.3s",
          backfaceVisibility: "hidden",
          cursor: "pointer",
        },
      }}
      onClick={handleClick}
    >
      <Box>
        <Flex align="baseline">
          <Heading
            fontSize="xl"
            pb={4}
            fontWeight={500}
            color={textColor[colorMode]}
          >
            {title}
          </Heading>
        </Flex>
        <Text color={textColor[colorMode]} lineHeight="tall">
          {subtitle || children}
        </Text>
      </Box>
    </Flex>
  );
};
export default Card;
