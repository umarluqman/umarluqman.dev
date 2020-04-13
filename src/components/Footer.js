import React from "react";
import { Flex, Button, Link, Box, IconButton } from "@chakra-ui/core";
import PropTypes from "prop-types";
import { GitHub, Twitter, Mail } from "react-feather";

const Page = ({ children }) => {
  return (
    <Flex
      justify="center"
      backgroundColor="white"
      width="full"
      as="footer"
      position="absolute"
      bottom={0}
      p={4}
      align="center"
      direction="column"
      flexWrap="wrap"
    >
      <Flex align="center">
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
        </Link>{" "}
      </Flex>
      <Box display="inherit">
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
        <IconButton
          icon={Mail}
          variant="ghost"
          isDisabled
          css={{
            svg: {
              width: 18,
              height: 18,
            },
          }}
        ></IconButton>
      </Box>
    </Flex>
  );
};

Page.propTypes = {};

export default Page;
