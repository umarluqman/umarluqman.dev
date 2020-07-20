/**
 * @jsx jsx
 * */
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Text,
  theme,
  RadioButtonGroup,
  useColorMode,
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import useMedia from "use-media";
import * as React from "react";
import { textColor, subtextColor } from "../../../../../styles/colors";

const PlanBox = React.forwardRef((props, ref) => {
  const { value, size, plan, isChecked, ...rest } = props;

  const { colorMode } = useColorMode();

  const nameText = { light: "gray.600", dark: "gray.200" };
  const blackWhite = { light: "black", dark: "white" };

  const bg = { light: "gray.50", dark: "gray.800" };
  const bgHover = { light: "#e6fffa3d", dark: theme.colors.teal[800] };

  const bgIsChecked = {
    light: theme.colors.teal[50],
    dark: theme.colors.teal[900],
  };

  const bgIsCheckedHover = {
    light: theme.colors.teal[50],
    dark: theme.colors.teal[900],
  };

  return (
    <Button
      ref={ref}
      display="block"
      borderRadius={8}
      variantColor="teal"
      border={
        isChecked
          ? `2px solid ${theme.colors.teal[400]}`
          : `2px solid ${theme.colors.gray[400]}`
      }
      bg={bg[colorMode]}
      p={4}
      css={
        isChecked
          ? {
              "&:hover": {
                cursor: "pointer",
                backgroundColor: bgIsCheckedHover[colorMode],
              },
              transition: "0.3s",
              backgroundColor: bgIsChecked[colorMode],
            }
          : {
              "&:hover": {
                cursor: "pointer",
                transition: "0.3s",
                backgroundColor: bgHover[colorMode],
                borderColor: theme.colors.teal[400],
              },
            }
      }
      textAlign="left"
      height="100%"
      onClick={() => setPlan(value)}
      {...rest}
    >
      <Text
        fontSize="sm"
        letterSpacing={1.2}
        fontWeight="semibold"
        color={nameText[colorMode]}
        pb={2}
      >
        {value}
      </Text>
      <Text color={blackWhite[colorMode]}>
        <span css={{ fontWeight: 500 }}>
          <b>
            <span css={{ fontSize: 24 }}>{size}</span> GB
          </b>
        </span>{" "}
        <Text as="span" fontWeight={600} color={subtextColor[colorMode]}>
          {" "}
          uploads
        </Text>
      </Text>
      <Text fontWeight={600} color={subtextColor[colorMode]}>
        <span>
          ${" "}
          <span css={{ fontWeight: 700, color: blackWhite[colorMode] }}>
            5{" "}
          </span>
        </span>
        / month
      </Text>
    </Button>
  );
});

const Billing = ({ values, ...formProps }) => {
  const borderColor = {
    light: theme.colors.gray[300],
    dark: theme.colors.gray[900],
  };

  const { colorMode } = useColorMode();
  const { md: medium } = theme.breakpoints;

  const md = useMedia(`(min-width: ${medium})`);
  const [plan, setPlan] = React.useState("BASIC");

  return (
    <Grid
      templateColumns={md ? "1fr 2fr" : "1fr"}
      p={4}
      mt={2}
      color={textColor[colorMode]}
    >
      <Box mr={8} mb={4}>
        <Text fontSize="xl" mb={4}>
          Billing
        </Text>
        <Text color={subtextColor[colorMode]}>
          This information will be shown publicly so be careful what information
          you provide
        </Text>
      </Box>
      <Flex
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        mt={2}
      >
        <FormControl width="100%" mb={8} mr={4}>
          <Flex justify="space-between" alignContent="center" mb={2}>
            <FormLabel>Change Plan</FormLabel>
            <Button variant="link" variantColor="blue" fontWeight="normal">
              Cancel Subscription
            </Button>
          </Flex>
          <RadioButtonGroup
            css={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))",
              gap: 12,
            }}
            defaultValue="ESSENTIAL"
            onChange={(val) => setPlan(val)}
          >
            <PlanBox value={"BASIC"} size={"1"} plan={plan} price="5" />
            <PlanBox value={"ESSENTIAL"} size={"5"} plan={plan} price="10" />
            <PlanBox value={"PRO"} size={"15"} plan={plan} price="20" />
          </RadioButtonGroup>

          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="flex-start"
          mb={8}
          width="100%"
        >
          <FormLabel mb={2}>Payment Method</FormLabel>
          <Flex
            justifyContent="space-between"
            width="100%"
            borderRadius={8}
            border={`1px solid ${borderColor[colorMode]}`}
            p={4}
            alignItems="center"
          >
            <Box>
              <Text fontSize={18} mb={1}>
                Visa ending 5455
              </Text>
              <Text color="gray.500">expireds 1/2019</Text>
            </Box>
            <Button>Update</Button>
          </Flex>
        </FormControl>
      </Flex>
    </Grid>
  );
};

export default Billing;
