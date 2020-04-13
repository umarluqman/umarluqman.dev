/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Flex, Box, Text, Stack, Heading, Button } from "@chakra-ui/core";
import PropTypes from "prop-types";

const Home = (props) => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor="gray.50"
      pb={80}
      width="full"
      minHeight="100vh"
    >
      <Box maxWidth={700} w="full" as="main">
        <Stack spacing={3} p={8}>
          <Text>Work in progress 🚧 ...</Text>
        </Stack>
      </Box>
    </Flex>
  );
};

Home.propTypes = {};

export default Home;
