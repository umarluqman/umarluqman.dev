/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import {
  Button,
  Box,
  Text,
  Stack,
  Heading,
  useColorMode,
} from "@chakra-ui/core";
import PropTypes from "prop-types";
import Link from "next/link";
import styled from "@emotion/styled";
import Router from "next/router";

const Home = (props) => {
  const { colorMode } = useColorMode();

  const smallTextcolor = { light: "gray.700", dark: "gray.200" };
  const textColor = { light: "gray.700", dark: "gray.200" };
  const headingColor = { light: "black", dark: "white" };
  const showcaseColor = { light: "black", dark: "#16bdca" };

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

  const handleNavShowcase = () => {
    return Router.push("/showcase");
  };

  return (
    <Box maxWidth={700} w="full" as="main">
      <Stack spacing={3} p={8}>
        <Heading
          as="h1"
          size="2xl"
          fontWeight="700"
          color={headingColor[colorMode]}
          letterSpacing="tight"
        >
          Hey, I'm Umar Luqman
        </Heading>
        <Box w="full" height={2}></Box>
        <Text
          color={textColor[colorMode]}
          fontFamily="Inter"
          lineHeight="taller"
        >
          I'm a front-end developer living in Malaysia, directed towards
          building solution with a primary focus on future maintability and
          business aspects{" "}
          <StyledStrike>
            {" "}
            rather than feeding my own impulse of writing complex code to feel
            smart
          </StyledStrike>
          . <br></br>
        </Text>
        <Box w="full" height={2}></Box>
        <Text
          color={smallTextcolor[colorMode]}
          fontFamily="Inter"
          lineHeight={1.8}
        >
          I prefer to write code expressively with minimal abstraction. I'm
          aware of the tradeoffs of both <b>DRY (Don't repeat yourself)</b> and{" "}
          <b>WET (Write everthing twice)</b> styles of coding.
        </Text>
        <Box w="full" height={2}></Box>
        <Text
          color={smallTextcolor[colorMode]}
          fontFamily="Inter"
          lineHeight={1.8}
        >
          Find my works at{" "}
          <Button
            variant="link"
            verticalAlign="unset"
            color={showcaseColor[colorMode]}
            rightIcon="external-link"
            onClick={handleNavShowcase}
          >
            Showcase
          </Button>
        </Text>
      </Stack>
    </Box>
  );
};

Home.propTypes = {};

export default Home;
