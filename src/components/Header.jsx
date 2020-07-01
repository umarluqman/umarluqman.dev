import { Heading } from "@chakra-ui/core";

const Header = ({ children, colorMode }) => {
  const headingColor = { light: "black", dark: "white" };
  return (
    <Heading
      size="2xl"
      as="h1"
      pb={6}
      letterSpacing="tight"
      color={headingColor[colorMode]}
    >
      {children}
    </Heading>
  );
};

export default Header;
