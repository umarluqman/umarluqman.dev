import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  Text,
  theme,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  useColorMode,
} from "@chakra-ui/core";
import { useFormik } from "formik";
import * as React from "react";
import Basics from "./components/Basics";
import Billing from "./components/Billing";
import Notification from "./components/Notification";
import useMedia from "use-media";
import Profile from "./components/Profile";
import Link from "next/link";

const Form = () => {
  const { lg, md: medium, xl, sm: small } = theme.breakpoints;

  const md = useMedia(`(min-width: ${medium})`);
  const { handleSubmit, ...formProps } = useFormik({
    initialValues: {
      email: "",
      password: "",
      language: null,
      country: null,
      firstName: "",
      lastName: "",
      username: "",
      aboutYou: "",
      plan: null,
      notification: [],
    },
  });
  const { colorMode } = useColorMode();

  const textColor = { light: "gray.700", dark: "gray.200" };

  return (
    <Box>
      <Breadcrumb
        color={textColor[colorMode]}
        spacing="8px"
        separator={<Icon color="gray.500" name="chevron-right" />}
        my={6}
        px={{ base: 6, md: 0 }}
      >
        <BreadcrumbItem>
          <Link href="/showcase">
            <BreadcrumbLink>Showcase</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link href="/showcase/design-to-code">
            <BreadcrumbLink>Design to code</BreadcrumbLink>
          </Link>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink fontWeight={600}>Complex Form</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        backgroundColor="gray.50"
        pb={80}
        width="100%"
      >
        <Box maxWidth={1000}>
          <Box>
            <Flex
              display="flex"
              flexDirection="row"
              alignItems="flex-start"
              justifyContent="flex-start"
              mb={8}
              mt={8}
              ml={4}
            >
              <Text fontSize="2xl">Account Setting</Text>
            </Flex>
            <Divider borderColor="gray.300" />
          </Box>

          <Basics {...formProps} />
          <Divider borderColor="gray.300" width="100%" />
          <Profile {...formProps} />
          <Divider borderColor="gray.300" width="100%" />
          <Billing {...formProps} />
          <Divider borderColor="gray.300" width="100%" />
          <Notification {...formProps} />
          <Divider borderColor="gray.300" width="100%" />
          <Flex justifyContent="flex-end" width="100%">
            <Box width={md ? 380 : "100%"}>
              <Grid templateColumns={md ? "1fr 1fr" : "1fr"} m={4} gap={4}>
                <Button variantColor="blue" variant="outline" width={"100%"}>
                  Cancel
                </Button>
                <Button variantColor="blue" width={"100%"}>
                  Save Settings
                </Button>
              </Grid>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default React.memo(Form);
