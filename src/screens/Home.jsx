/**@jsx jsx */
import { Box, Button, Stack, Text, useColorMode } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import Router from "next/router";
import Header from "../components/Header";
import { textColor } from "../styles/colors";

const Home = (props) => {
  const { colorMode } = useColorMode();

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
    <Box maxWidth={800} w="full" as="main" minHeight="85vh">
      <Stack spacing={3} p={8}>
        <Header colorMode={colorMode}>Hey, I'm Umar Luqman</Header>
        <Box w="full" height={2}></Box>
        <Text
          color={textColor[colorMode]}
          fontFamily="Inter"
          lineHeight="taller"
        >
          I'm a software engineer living in Malaysia, directed towards building
          solution with a primary focus on future maintability and business
          aspects{" "}
          <StyledStrike>
            {" "}
            rather than feeding my own impulse of writing complex code to feel
            smart
          </StyledStrike>
          . <br></br>
        </Text>
        <Box w="full" height={2}></Box>
        <Text color={textColor[colorMode]} fontFamily="Inter" lineHeight={1.8}>
          I prefer to write code expressively with minimal abstraction. I'm
          aware of the tradeoffs of both{" "}
          <Text as="spam" color={headingColor[colorMode]} fontWeight={500}>
            DRY (Don't repeat yourself)
          </Text>{" "}
          and{" "}
          <Text as="spam" color={headingColor[colorMode]} fontWeight={500}>
            WET (Write everthing twice)
          </Text>{" "}
          styles of coding.
        </Text>
        <Box w="full" height={2}></Box>
        <Text color={textColor[colorMode]} fontFamily="Inter" lineHeight={1.8}>
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
