import React, { useContext } from "react";
import { Flex, Button, Link, Box, IconButton } from "@chakra-ui/core";
import PropTypes from "prop-types";
import { GitHub, Twitter, Mail } from "react-feather";
import { ColorModeContext } from "../hooks/useColorMode";

const Footer = (props) => {
  const colorMode = useContext(ColorModeContext);
  const footerBgColor = { light: "white", dark: "gray.900" };
  const textColor = { light: "black", dark: "white" };
  return (
    <Flex
      justify="center"
      backgroundColor={footerBgColor[colorMode]}
      width="full"
      as="footer"
      position="absolute"
      bottom={0}
      p={4}
      align="center"
      direction="column"
      flexWrap="wrap"
    >
      <Flex align="center" color={textColor[colorMode]}>
        Built with{" "}
        <Link href="https://nextjs.org/" isExternal>
          <Button p={2} variant="link" color={textColor[colorMode]}>
            Next
          </Button>
        </Link>{" "}
        & hosted in{" "}
        <Link href="https://zeit.co" isExternal>
          <Button p={2} variant="link" color={textColor[colorMode]}>
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
            variantColor={textColor[colorMode]}
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

Footer.propTypes = {};

export default Footer;
