import React from "react";
import {
  Flex,
  Button,
  Link,
  Box,
  IconButton,
  useColorMode,
} from "@chakra-ui/core";
import PropTypes from "prop-types";
import { GitHub, Twitter, Mail } from "react-feather";

const Page = ({ children }) => {
  const { colorMode } = useColorMode();

  const footerBgColor = { light: "white", dark: "gray.900" };
  const textColor = { light: "black", dark: "white" };
  return (
    <Flex
      justify="center"
      backgroundColor={footerBgColor[colorMode]}
      width="full"
      as="footer"
      p={4}
      align="center"
      direction="column"
      flexWrap="wrap"
    >
      <Flex align="center" flexWrap="wrap" justify="center">
        <Flex align="center" color={textColor[colorMode]}>
          Built with{" "}
          <Link href="https://nextjs.org/" isExternal>
            <Button p={2} variant="link" color={textColor[colorMode]}>
              Next
            </Button>
          </Link>{" "}
          &{" "}
          <Link href="https://prismic.io/" isExternal>
            <Button p={2} variant="link" color={textColor[colorMode]}>
              Prismic
            </Button>
          </Link>{" "}
          {/* Hosted in{" "}
          <Link href="https://vercel.com" isExternal>
            <Button p={2} variant="link" color={textColor[colorMode]}>
              Vercel
            </Button>
          </Link>{" "} */}
        </Flex>
        <Flex w={{ base: "100%", sm: "max-content" }} justify="center">
          <Link href="https://twitter.com/umarlqmn" isExternal>
            <IconButton
              icon={Twitter}
              variant="ghost"
              css={{
                svg: {
                  width: 18,
                  height: 18,
                },
              }}
            ></IconButton>
          </Link>
          <Link href="https://github.com/umarluqman" isExternal>
            <IconButton
              icon={GitHub}
              variant="ghost"
              css={{
                svg: {
                  width: 18,
                  height: 18,
                },
              }}
            ></IconButton>
          </Link>
          <a href="mailto:contact@umarluqman.dev?Subject=Hello" target="_top">
            <IconButton
              icon={Mail}
              variant="ghost"
              css={{
                svg: {
                  width: 18,
                  height: 18,
                },
              }}
            ></IconButton>
          </a>
        </Flex>
      </Flex>
    </Flex>
  );
};

Page.propTypes = {};

export default Page;
