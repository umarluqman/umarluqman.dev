import React from "react";
import { Flex, Button, Box } from "@chakra-ui/core";
import Link from "next/link";
import PropTypes from "prop-types";

const Page = ({ children }) => {
  return (
    <Flex
      justify="center"
      backgroundColor="white"
      width="full"
      as="footer"
      position="absolute"
      bottom={0}
      p={8}
      align="center"
    >
      Built with{" "}
      <Button p={2} variant="link" variantColor="black">
        Next
      </Button>{" "}
      & hosted in{" "}
      <Button p={2} variant="link" variantColor="black">
        Now
      </Button>
    </Flex>
  );
};

Page.propTypes = {};

export default Page;
