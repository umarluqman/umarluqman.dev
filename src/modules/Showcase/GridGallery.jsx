/**@jsx jsx */
import { Box, Grid, Image, Text, Flex, Stack } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";

export default function Post() {
  if (true) {
    return (
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        // backgroundColor={bgColor[colorMode]}
        pb={80}
        width="full"
      >
        <Box maxWidth={700} w="full" as="main">
          <Stack spacing={3} p={8}>
            <Text
            // color={textColor[colorMode]}
            >
              Work in progress 🚧
            </Text>
          </Stack>
        </Box>
      </Flex>
    );
  }
  return (
    <Box width="full">
      <Grid templateColumns="repeat(auto-fit, minmax(380px, 1fr))" gap={6}>
        {[]?.map(({ src }) => (
          <div
            css={{
              position: "relative",
              overflow: "hidden",
              backgroundColor: "black",
              "&:hover": {
                cursor: "pointer",
              },
              "&:hover .caption": {
                transform: "translateY(-10px)",
                transitionDelay: ".15s",
                backfaceVisibility: "hidden",
              },
              "&:hover img": {
                transform: "scale(1.4) translateY(-10%)",
                opacity: 0.8,
              },
            }}
          >
            <Image
              src={src}
              objectFit="cover"
              width="400px"
              height="240px"
              css={{
                transform: "scale(1.4) translateY(0)",
                backfaceVisibility: "hidden",
                opacity: 1,
                transition: "all .5s",
              }}
            ></Image>

            <Box
              pr={8}
              pt={3}
              w="full"
              className="caption"
              css={{
                position: "absolute",
                maxWidth: "80%",

                bottom: "-10px",
                left: "0",
                transform: "translateY(100%)",
                backgroundColor: "white",
                textTransform: "capitalize",
                height: 80,
                transition: "transform .5s cubic-bezier(.4,0,.2,1)",
                backfaceVisibility: "hidden",
              }}
            >
              <Text fontSize="xl" fontWeight={500}>
                Alvar Alto Museum
              </Text>
              <Text fontWeight={300} fontSize="sm">
                Muscat, Sultanate of Oman
              </Text>
            </Box>
          </div>
        ))}
      </Grid>
    </Box>
  );
}
