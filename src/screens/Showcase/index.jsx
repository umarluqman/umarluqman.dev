/** @jsx jsx */
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  useColorMode,
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import Card from "../../components/Card";
import { linkColor } from "../../styles/colors";

const Showcase = () => {
  const { colorMode } = useColorMode();

  const textColor = { light: "gray.700", dark: "gray.200" };
  const headingColor = { light: "black", dark: "white" };
  return (
    <Flex direction="column" minHeight="100vh" w="100%" align="center" p={8}>
      <Box maxWidth={710} mb={12}>
        <Box w="full">
          <Heading
            fontSize="5xl"
            pb={6}
            letterSpacing="tight"
            color={headingColor[colorMode]}
          >
            {" "}
            Showcase
          </Heading>
          <Text mb={3} color={textColor[colorMode]} lineHeight="taller">
            Collection of my mini side projects outside of my professional
            career. Driven by curiosity, this is where I explored new stuff and
            built upon it.
          </Text>

          <Text color={textColor[colorMode]} lineHeight="taller">
            I'm currently working on a multi-tenancy property lead management
            platform project for my day job. Check out my{" "}
            <Button
              variant="ghost"
              verticalAlign="unset"
              rightIcon="external-link"
              color={linkColor[colorMode]}
              variant="link"
              as={"a"}
              href="https://www.linkedin.com/in/umarluqman/"
              target="_blank"
              rel="noopener noreferrer"
              mr={3}
            >
              LinkedIn
            </Button>
          </Text>
          <Box h={12}></Box>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={8}>
            <Card
              title={"Design to Code Series"}
              subtitle="Collection of one-page user interfaces made up with React JS & 👩🏻‍🎤 Emotion
              (CSS-in-JS)"
              pathname="/showcase/design-to-code"
            ></Card>
            <Card
              title={"Grid Image Gallery with Animation"}
              subtitle="Image gallery in a grid with a smooth hover transition."
              pathname="/showcase/grid-gallery"
            ></Card>
          </Grid>
          <Box h={12}></Box>
          <Flex justify="center" my={10}>
            <Text mb={3} color={textColor[colorMode]} fontWeight={300}>
              A fashion e-commerce site with NextJS & headless CMS will be
              featured here soon ⚡️
            </Text>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default Showcase;
