import { Text, Button, useColorMode } from "@chakra-ui/core";

const DesignToCodeDesc = () => {
  const { colorMode } = useColorMode();

  const textColor = { light: "gray.700", dark: "gray.200" };
  return (
    <Text mb={3} color={textColor[colorMode]} lineHeight="taller">
      Collection of one page user interfaces made up with React JS & 👩🏻‍🎤 Emotion
      (CSS-in-JS). I just recreated it again for learning purpose. Most of
      designs will be found in{" "}
      <Button
        as="a"
        href="https://www.refactoringui.com"
        variant="link"
        rightIcon="external-link"
        verticalAlign="baseline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Refactoring UI book
      </Button>
      .
    </Text>
  );
};

export default DesignToCodeDesc;
