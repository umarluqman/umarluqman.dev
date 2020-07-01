/**@jsx jsx */
import {
  Box,
  Grid,
  Image,
  Text,
  useColorMode,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Post() {
  const { colorMode } = useColorMode();

  const textColor = { light: "gray.700", dark: "gray.200" };
  const bgColor = { light: "gray.50", dark: "gray.800" };

  const gallery = [
    {
      alt: "Living room",
      src:
        "https://cdn.sanity.io/images/k4k9b0z6/production/e822e3d2bc6e92745de6c5027d7c5f6d9e759d96-899x600.jpg",
    },
    {
      alt: "2nd bedroom",
      src:
        "https://cdn.sanity.io/images/k4k9b0z6/production/b15d8ffd95ef7ccaf80ba953840f5066bb182f17-899x600.jpg",
    },
    {
      alt: "Living room ",
      src:
        "https://cdn.sanity.io/images/k4k9b0z6/production/c9fa8237b173f23b108efbe813c3358a9f6d00b4-899x600.jpg",
    },
    {
      alt: "Balcony",
      src:
        "https://cdn.sanity.io/images/k4k9b0z6/production/3b918af9b9b7bfb1e4814aba6d2c0c314bb1f358-792x600.jpg",
    },
    {
      alt: "Master bedroom",
      src:
        "https://cdn.sanity.io/images/k4k9b0z6/production/c8ef0f40a2dbfbc0477e8ab1e3ec95bf89d697c1-899x600.jpg",
    },
    {
      alt: "Swimming pool",
      src:
        "https://cdn.sanity.io/images/k4k9b0z6/production/e25d33c9333a62f939ba0e8d959a9082de70c720-1318x600.jpg",
    },
    {
      alt: "Playground",
      src:
        "https://cdn.sanity.io/images/k4k9b0z6/production/c114fdaf036ddf9ba8a812ec9a481df5efc69aaf-840x600.jpg",
    },
  ];
  return (
    <Box maxWidth={"full"} px={6} pb={10} w={1200}>
      <Breadcrumb
        color={textColor[colorMode]}
        spacing="8px"
        separator={<Icon color="gray.500" name="chevron-right" />}
        my={6}
      >
        <BreadcrumbItem>
          <Link href="/showcase">
            <BreadcrumbLink>Showcase</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontWeight={600}>
            Grid image gallery with animation
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap={6}>
        {gallery?.map(({ src, alt }) => (
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
              bg={bgColor[colorMode]}
              color={textColor[colorMode]}
              css={{
                position: "absolute",
                maxWidth: "80%",
                bottom: "-10px",
                left: "0",
                transform: "translateY(100%)",
                textTransform: "capitalize",
                height: 80,
                transition: "transform .5s cubic-bezier(.4,0,.2,1)",
                backfaceVisibility: "hidden",
              }}
            >
              <Text fontSize="xl" fontWeight={500}>
                {alt}
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
