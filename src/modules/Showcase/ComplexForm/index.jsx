import { Box, Button, Divider, Flex, Grid, Text, theme } from "@chakra-ui/core";
// import { withTheme } from "emotion-theming";
import { useFormik } from "formik";
import * as React from "react";
import Basics from "./components/Basics";
import Billing from "./components/Billing";
import Notification from "./components/Notification";
import useMedia from "use-media";
import Profile from "./components/Profile";

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

  return (
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
  );
};

export default React.memo(Form);
