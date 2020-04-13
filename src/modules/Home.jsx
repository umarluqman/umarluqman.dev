/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Flex, Box, Text, Stack, Heading, useColorMode } from "@chakra-ui/core";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "@emotion/styled";

const Home = (props) => {
  const { colorMode } = useColorMode();

  const smallTextcolor = { light: "gray.600", dark: "gray.200" };
  const textColor = { light: "black", dark: "gray.400" };
  const headingColor = { light: "black", dark: "white" };

  const StyledStrike = styled("span")`
    display: inline;
    background-repeat: no-repeat;
    transition: all 500ms ease-in-out;
    background-position: center left;
    background-size: 100% 1px;
    background-image: ${colorMode === "dark"
      ? "linear-gradient(to right, #FFF, #FFF)"
      : "linear-gradient(to right, #000, #000)"};
    padding-bottom: 4px;
    &:hover {
      background-position: bottom left;
      background-size: 100% 1px;
    }
  `;
  return (
    <Box maxWidth={700} w="full" as="main">
      <Stack spacing={3} p={8}>
        <Heading
          as="h1"
          size="2xl"
          fontWeight="600"
          my={8}
          color={headingColor[colorMode]}
        >
          Hi, I'm Umar Luqman
        </Heading>
        <Text fontSize="lg" color={textColor[colorMode]}>
          I'm a software developer based in Malaysia 🇲🇾. I write applications
          with the focus on solving problem bit by bit while considering future
          maintability and business aspects{" "}
          <StyledStrike>
            {" "}
            rather than feeding my own impulse of writing complex code to feel
            smart
          </StyledStrike>
          .
        </Text>
        <Text color={smallTextcolor[colorMode]}>
          I prefer to write code expressively with minimal abstractions.
        </Text>
      </Stack>
    </Box>
  );
};

Home.propTypes = {};

export default Home;
