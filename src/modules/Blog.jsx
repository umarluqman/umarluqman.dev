/**@jsx jsx */
import React, { useContext } from "react";
import { jsx } from "@emotion/core";
import { Flex, Box, Text, Stack } from "@chakra-ui/core";
import PropTypes from "prop-types";
import { ColorModeContext } from "../hooks/useColorMode";

const Blog = (props) => {
  const colorMode = useContext(ColorModeContext);

  const bgColor = { light: "gray.50", dark: "gray.800" };
  const textColor = { light: "black", dark: "white" };

  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor={bgColor[colorMode]}
      pb={80}
      width="full"
    >
      <Box maxWidth={700} w="full" as="main">
        <Stack spacing={3} p={8}>
          <Text color={textColor[colorMode]}>Work in progress 🚧 ...</Text>
        </Stack>
      </Box>
    </Flex>
  );
};

Blog.propTypes = {};

export default Blog;
