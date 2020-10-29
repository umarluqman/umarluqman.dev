import { Flex, Heading, Icon, Text, useColorMode } from "@chakra-ui/core";
import React from "react";

const BulletPoint = ({ children, ...stylingProps }) => {
  return (
    <Flex align="center" {...stylingProps}>
      <Icon name="check-circle" mr={2} color="green.400"></Icon>
      <Text>{children}</Text>
    </Flex>
  );
};

const NowNowNow = () => {
  const { colorMode } = useColorMode();

  const smallTextColor = { light: "gray.700", dark: "gray.300" };
  const textColor = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      align="flex-start"
      w="full"
      maxW={700}
      color={textColor[colorMode]}
    >
      <Heading mb={8}>What I'm up to now?</Heading>
      <BulletPoint mb={4}>Living in Cyberjaya, Malaysia.</BulletPoint>
      <BulletPoint mb={4}>Coding with Next.js on my day job.</BulletPoint>{" "}
      <BulletPoint mb={4}>
        Into headless CMS and headless E-commerce.
      </BulletPoint>
      <BulletPoint mb={3}>
        Trying to be fit and live a healthy lifestyle.
      </BulletPoint>
      <Text ml={8} mb={2}>
        I get sweat almost everyday, learning to cook through my try and error
        series.
      </Text>
      <Text ml={8}>
        For cardio, I do jumprope. Learned to jumprope during Covid restricted
        movement.
      </Text>
      <Text
        ml={8}
        as="i"
        mt={8}
        fontSize="sm"
        color={smallTextColor[colorMode]}
      >
        Last updated on October 2020
      </Text>
    </Flex>
  );
};

export default NowNowNow;
