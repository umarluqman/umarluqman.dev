import React from "react";
import { Flex, Button, Link } from "@chakra-ui/core";
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
      <Link href="https://nextjs.org/" isExternal>
        <Button p={2} variant="link" variantColor="black">
          Next
        </Button>
      </Link>{" "}
      & hosted in{" "}
      <Link href="https://zeit.co" isExternal>
        <Button p={2} variant="link" variantColor="black">
          Now
        </Button>
      </Link>
    </Flex>
  );
};

Page.propTypes = {};

export default Page;
