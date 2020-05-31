/** @jsx jsx */
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  useColorMode,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import Card from "../../components/Card";
import DesignToCodeText from "../../components/DesignToCodeText";
import Link from "next/link";

const Showcase = () => {
  const { colorMode } = useColorMode();

  const textColor = { light: "gray.700", dark: "gray.200" };
  const headingColor = { light: "black", dark: "white" };
  return (
    <Flex
      direction="column"
      minHeight="100vh"
      w="100%"
      align="center"
      p={8}
      pt={0}
    >
      <Box maxWidth={800} mb={12}>
        <Breadcrumb
          spacing="8px"
          separator={<Icon color="gray.500" name="chevron-right" />}
          py={1}
          px={2}
          color={textColor[colorMode]}
        >
          <BreadcrumbItem>
            <Link href="/showcase">
              <BreadcrumbLink>Showcase</BreadcrumbLink>
            </Link>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink fontWeight={600}>Design to code</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box w="full">
          <Heading
            fontSize="5xl"
            pb={6}
            letterSpacing="tight"
            color={headingColor[colorMode]}
          >
            {" "}
            Design to Code
          </Heading>
          <DesignToCodeText />
          <Box h={8}></Box>
          <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={8}>
            <Card
              title={"Dashboard"}
              subtitle="Invoicing system dashboard, using Chakra UI & React Table"
              pathname="/showcase/dashboard"
              stackList={["Chakra UI", "Emotion", "React Table", "Day JS"]}
            ></Card>
            <Card
              title={"Landing Page"}
              pathname="/showcase/landing-page"
              stackList={["Chakra UI", "Emotion"]}
            >
              Tuple landing page, based on Steve Schoger's{" "}
              <Button
                as="a"
                href="https://www.dropbox.com/s/tictbuvpnzxpf7v/tuple-after.sketch?dl=0"
                variant="link"
                rightIcon="external-link"
                verticalAlign="baseline"
                target="_blank"
                rel="noopener noreferrer"
              >
                design
              </Button>
            </Card>
            <Card
              title={"Complex Form"}
              subtitle="Image gallery in a grid with a smooth hover transition."
              pathname="/showcase/complex-form"
              stackList={["Chakra UI", "Formik"]}
            ></Card>
          </Grid>
        </Box>
      </Box>
    </Flex>
  );
};

export default Showcase;
