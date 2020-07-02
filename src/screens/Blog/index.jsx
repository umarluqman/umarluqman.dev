/**@jsx jsx */
import { jsx } from "@emotion/core";
import {
  Flex,
  Box,
  Text,
  Stack,
  Heading,
  Button,
  Image,
  useColorMode,
  theme,
  Divider,
  Badge,
  Alert,
} from "@chakra-ui/core";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Router from "next/router";
import Header from "../../components/Header";
import { smallTextcolor } from "../../styles/colors";

export default function Blog({ allPosts }) {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };
  const textColor = { light: "black", dark: "white" };
  const headingColor = { light: "black", dark: "white" };

  const handleNav = (slug) => () => {
    Router.push(`/blog/[slug]`, `/blog/${slug}`);
  };

  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      backgroundColor={bgColor[colorMode]}
      pb={80}
      width="full"
    >
      <Box maxWidth={810} w="full" as="main" p={6}>
        <Header colorMode={colorMode}>Blog</Header>
        <Alert
          variant="left-accent"
          status="warning"
          color={textColor[colorMode]}
        >
          Work in progres 🚧 <br></br>Articles here are not real
        </Alert>
        <Stack spacing={6} py={8}>
          {allPosts.map(({ node }) => {
            const {
              title,
              excerpt,
              cover_image = "",
              date,
              _meta: { uid },
            } = node;

            return (
              <>
                <Flex
                  key={uid}
                  flexWrap="wrap"
                  onClick={handleNav(uid)}
                  css={{ "&:hover": { cursor: "pointer" } }}
                >
                  <Image
                    src={cover_image?.url}
                    alt={cover_image?.alt}
                    w={300}
                    h={196}
                    objectFit="cover"
                    mt={8}
                    mb={4}
                    borderRadius={8}
                    boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"
                  />

                  <Flex
                    direction="column"
                    p={4}
                    pl={8}
                    pt={0}
                    justifyContent="space-between"
                    flex={1}
                  >
                    <Box>
                      <Badge
                        mb={2}
                        variantColor="purple"
                        borderRadius={99}
                        px={2}
                        fontWeight={500}
                        textTransform="capitalize"
                        letterSpacing="wider"
                      >
                        Development
                      </Badge>
                      <Heading
                        as="h2"
                        size={"lg"}
                        color={textColor[colorMode]}
                        mb={2}
                      >
                        {title[0]?.text}
                      </Heading>
                      <Flex align="center">
                        <Text
                          fontWeight={400}
                          textTransform="uppercase"
                          color={smallTextcolor[colorMode]}
                          fontSize="sm"
                          mr={2}
                        >
                          {dayjs(date).format("DD MMMM YYYY")}
                        </Text>
                        <Box
                          h="4px"
                          w="4px"
                          backgroundColor="gray.400"
                          borderRadius="50%"
                          display="inline-block"
                          mr={2}
                        ></Box>
                        <Text
                          fontWeight={400}
                          textTransform="uppercase"
                          color={smallTextcolor[colorMode]}
                          fontSize="sm"
                        >
                          4 mins read
                        </Text>
                      </Flex>
                      <Text
                        mt={4}
                        lineHeight={2}
                        color={smallTextcolor[colorMode]}
                        fontFamily="Inter"
                      >
                        {excerpt}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
                <Divider my={8} borderColor="gray.300" />
              </>
            );
          })}
        </Stack>
      </Box>
    </Flex>
  );
}

Blog.propTypes = {};
