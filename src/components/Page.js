import React from "react";
import { Flex, Button, Box } from "@chakra-ui/core";
import Link from "next/link";
import PropTypes from "prop-types";
import Footer from "./Footer";

const Page = ({ children }) => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor="gray.50"
      width="full"
      minHeight="100vh"
      position="relative"
    >
      <Flex as="header" w="full" align="center" justify="center">
        {" "}
        <Flex w={700} justify="flex-end" p={4}>
          <Link href="/">
            <Button variant="ghost" color="black" fontWeight={400}>
              Home
            </Button>
          </Link>
          <Link href="/blog">
            <Button variant="ghost" color="black" fontWeight={400}>
              Blog
            </Button>
          </Link>
          <Button variant="ghost" color="black" isDisabled fontWeight={400}>
            Contact
          </Button>
        </Flex>
      </Flex>
      {children}
      <Footer></Footer>
    </Flex>
  );
};

Page.propTypes = {};

export default Page;
