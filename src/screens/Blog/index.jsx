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
import { textColor, headingColor } from "../../styles/colors";

export default function Blog({ allPosts }) {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.800" };

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
          {allPosts.map(({ node, readingTime }) => {
            const {
              title,
              excerpt,
              cover_image = "",
              date,
              _meta: { uid },
            } = node;

            return (
              <React.Fragment key={uid}>
                <Flex
                  flexWrap="wrap"
                  onClick={handleNav(uid)}
                  css={{ "&:hover": { cursor: "pointer" } }}
                  align="center"
                >
                  <Image
                    src={cover_image?.url}
                    alt={cover_image?.alt}
                    minW={300}
                    maxW={{ sm: 367, md: 327 }}
                    w="full"
                    h={220}
                    objectFit="cover"
                    mb={{ base: 8, md: 0 }}
                    borderRadius={8}
                    boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);"
                  />

                  <Flex
                    direction="column"
                    p={{ sm: 0, md: 4 }}
                    pl={{ sm: 0, md: 8 }}
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
                        color={headingColor[colorMode]}
                        mb={2}
                      >
                        {title[0]?.text}
                      </Heading>
                      <Flex align="center">
                        <Text
                          fontWeight={400}
                          textTransform="uppercase"
                          color={textColor[colorMode]}
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
                          color={textColor[colorMode]}
                          fontSize="sm"
                        >
                          {readingTime.text}
                        </Text>
                      </Flex>
                      <Text
                        mt={4}
                        lineHeight={2}
                        color={textColor[colorMode]}
                        fontFamily="Inter"
                      >
                        {excerpt}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
                <Divider my={8} borderColor="gray.300" />
              </React.Fragment>
            );
          })}
        </Stack>
      </Box>
    </Flex>
  );
}

Blog.propTypes = {};
