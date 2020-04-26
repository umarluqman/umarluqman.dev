/** @jsx jsx */
import { Flex, Text, Button, Link, Box, theme } from "@chakra-ui/core";
import { jsx } from "@emotion/core";

const Index = () => {
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      w="100%"
      align="center"
      bg="rgb(37, 47, 63)"
      p={4}
      pt={10}
    >
      <Box w={700}>
        <Text fontSize="3xl" fontWeight={600} color="white" pb={2}>
          {" "}
          Showcase
        </Text>

        <Text color="white" lineHeight={1.8}>
          Collection of user interfaces made up with ReactJS & 👩🏻‍🎤 Emotion (CSS
          in JS). They are inspired by the{" "}
          <Button
            variant="link"
            href="https://refactoringui.com/book/"
            isExternal
            rightIcon="external-link"
            verticalAlign="unset"
            color="#16bdca"
          >
            Refactoring UI book
          </Button>
        </Text>
        <Box h={4}></Box>
        <Text color="white">
          All source code is avaibale on{" "}
          <Button
            variant="link"
            href="https://refactoringui.com/book/"
            isExternal
            verticalAlign="unset"
            color={theme.colors.gray[200]}
            rightIcon="external-link"
          >
            GitHub
          </Button>
        </Text>
        <Flex justify="center">
          <Flex w={500} justify="space-around" mt={8} flexWrap="wrap">
            <Link href="/showcase/dashboard">
              <Button
                variant="ghost"
                color={theme.colors.gray[200]}
                _hover={{
                  backgroundColor: theme.colors.gray[600],
                }}
                fontWeight={400}
              >
                Dashboard
              </Button>
            </Link>
            <Link href="/showcase/landing-page">
              <Button
                variant="ghost"
                color={theme.colors.gray[200]}
                _hover={{
                  backgroundColor: theme.colors.gray[600],
                }}
                fontWeight={400}
              >
                Landing Page
              </Button>
            </Link>
            <Link href="/showcase/complex-form">
              <Button
                variant="ghost"
                color={theme.colors.gray[200]}
                _hover={{
                  backgroundColor: theme.colors.gray[600],
                }}
                fontWeight={400}
              >
                Complex Form
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Index;
