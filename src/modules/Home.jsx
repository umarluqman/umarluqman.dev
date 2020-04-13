/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Flex, Box, Text, Stack, Heading, Button } from "@chakra-ui/core";
import PropTypes from "prop-types";
import Link from "next/link";

const Home = (props) => {
  return (
    <Box maxWidth={700} w="full" as="main">
      <Stack spacing={3} p={8}>
        <Heading as="h1" size="2xl" fontWeight="600" my={8}>
          Hi, I'm Umar Luqman
        </Heading>
        <Text fontSize="lg">
          I'm a developer & creator based in Malaysia 🇲🇾. I write applications
          with the focus on solving problems and future maintability
          <strike>
            {" "}
            rather than feeding my own satisfaction of writing complex code.
          </strike>
        </Text>
        <Text color="gray.600">
          I prefer to write code expressively with minimal abstractions.
        </Text>
      </Stack>
    </Box>
  );
};

Home.propTypes = {};

export default Home;
