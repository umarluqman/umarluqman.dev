import { Button, Flex, IconButton, useColorMode } from "@chakra-ui/core";
import Link from "next/link";
import React, { memo } from "react";
import { Moon, Sun } from "react-feather";
import Footer from "./Footer";

const Page = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = { light: "gray.50", dark: "gray.800" };
  const menuColor = { light: "black", dark: "white" };

  return (
    <>
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        backgroundColor={bgColor[colorMode]}
        width="full"
        minHeight="92vh"
      >
        {/* {!externalLink.has(router.pathname) && ( */}
        <Flex as="header" w="full" align="center" justify="center">
          {" "}
          <Flex
            w={800}
            justify={{ base: "space-between", sm: "flex-end" }}
            p={4}
            as="nav"
          >
            <Link href="/showcase">
              <a>
                <Button
                  variant="ghost"
                  color={menuColor[colorMode]}
                  fontWeight={400}
                  px={{ base: 2, sm: 4 }}
                >
                  Now
                </Button>
              </a>
            </Link>

            <Link href="/">
              <Button
                variant="ghost"
                color={menuColor[colorMode]}
                fontWeight={400}
                px={{ base: 2, sm: 4 }}
              >
                Home
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                variant="ghost"
                color={menuColor[colorMode]}
                fontWeight={400}
                px={{ base: 2, sm: 4 }}
              >
                Blog
              </Button>
            </Link>
            <a href="mailto:contact@umarluqman.dev?Subject=Hello" target="_top">
              <Button
                variant="ghost"
                color={menuColor[colorMode]}
                fontWeight={400}
                px={{ base: 2, sm: 4 }}
              >
                Contact
              </Button>
            </a>
            <IconButton
              ml={2}
              icon={colorMode === "dark" ? Sun : Moon}
              onClick={toggleColorMode}
              variant="ghost"
              css={{
                svg: {
                  fill: colorMode === "light" ? "black" : "white",
                  width: 18,
                  height: 18,
                },
                color: colorMode === "dark" ? "white" : "black",
              }}
            ></IconButton>
          </Flex>
        </Flex>
        {/* )} */}
        {children}
      </Flex>
      <Footer></Footer>
    </>
  );
};

Page.propTypes = {};

export default memo(Page);
