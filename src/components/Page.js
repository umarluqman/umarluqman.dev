import React from "react";
import { Flex, Button, IconButton, useColorMode } from "@chakra-ui/core";
import Link from "next/link";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { Moon, Sun } from "react-feather";

const Page = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };
  const menuColor = { light: "black", dark: "white" };

  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor={bgColor[colorMode]}
      width="full"
      minHeight="100vh"
      position="relative"
    >
      <Flex as="header" w="full" align="center" justify="center">
        {" "}
        <Flex w={700} justify="flex-end" p={4}>
          <Link href="/">
            <Button
              variant="ghost"
              color={menuColor[colorMode]}
              fontWeight={400}
            >
              Home
            </Button>
          </Link>
          <Link href="/blog">
            <Button
              variant="ghost"
              color={menuColor[colorMode]}
              fontWeight={400}
            >
              Blog
            </Button>
          </Link>
          <Button
            variant="ghost"
            color={menuColor[colorMode]}
            isDisabled
            fontWeight={400}
          >
            Contact
          </Button>
          <IconButton
            icon={colorMode === "dark" ? Sun : Moon}
            onClick={toggleColorMode}
            css={{
              svg: {
                fill: colorMode === "light" && "black",
                width: 18,
                height: 18,
              },
              color: colorMode === "dark" ? "white" : "black",
            }}
          ></IconButton>
        </Flex>
      </Flex>
      {children}
      <Footer></Footer>
    </Flex>
  );
};

Page.propTypes = {};

export default Page;
