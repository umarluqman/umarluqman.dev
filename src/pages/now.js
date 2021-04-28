import { Flex, Heading, Icon, Text, useColorMode } from "@chakra-ui/core";
import { NextSeo } from "next-seo";
import React from "react";

const BulletPoint = ({ children, ...stylingProps }) => {
  return (
    <Flex {...stylingProps}>
      <Icon name="check-circle" mr={2} color="green.400" mt={"5px"}></Icon>
      <Text>{children}</Text>
    </Flex>
  );
};

const NowNowNow = () => {
  const { colorMode } = useColorMode();

  const smallTextColor = { light: "gray.700", dark: "gray.300" };
  const textColor = { light: "black", dark: "white" };
  return (
    <>
      <NextSeo
        title="Now"
        description="What's I'm up to now?"
        openGraph={{
          url: "https://umarluqman.dev/now",
          title: "Now",
          description: "What's I'm up to now?",
          images: [
            {
              url:
                "https://images.prismic.io/shortcase/cbc84946-61be-4daa-a62f-941f0c814970_NOW.png?auto=compress,format",
              width: 568,
              height: 280,
              alt: "",
            },
          ],
          site_name: "Umar Luqman Digital Garden",
        }}
        twitter={{
          handle: "@umarlqmn",
          cardType: "summary_large_image",
        }}
      />
      <Flex
        direction="column"
        align="flex-start"
        w="full"
        maxW={700}
        color={textColor[colorMode]}
        p={6}
        mb={8}
      >
        <Heading mb={8}>What I'm up to now?</Heading>
        <BulletPoint mb={4}>Got married to my favourite person 👩🏻‍💻</BulletPoint>
        <BulletPoint mb={4}>
          My fitness level have slighly degraded but I will still be jump roping
          / doing calisthenics.
        </BulletPoint>
        <BulletPoint mb={4}>
          Developing muscle memory for controlling my drone. Installed LiftOff,
          a drone simulator to learn master acro / manual mode.
        </BulletPoint>
        <BulletPoint mb={4}>
          My web extention, focusmode.app have over 100+ users as of right now.
          Blessed to be able to give back to the world.
        </BulletPoint>
        <Text
          ml={8}
          as="i"
          mt={8}
          fontSize="sm"
          color={smallTextColor[colorMode]}
        >
          Last updated on April 2021
        </Text>
      </Flex>
    </>
  );
};

export default NowNowNow;
