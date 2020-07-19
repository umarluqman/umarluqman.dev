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
} from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import useMedia from "use-media";
import * as React from "react";

const PlanBox = React.forwardRef((props, ref) => {
  const { value, size, plan, isChecked, ...rest } = props;

  return (
    <Button
      ref={ref}
      display="block"
      borderRadius={8}
      variantColor="teal"
      border={
        isChecked
          ? `2px solid ${theme.colors.teal[400]}`
          : `2px solid ${theme.colors.gray[300]}`
      }
      bg={theme.colors.gray[50]}
      p={4}
      css={
        isChecked
          ? {
              "&:hover": {
                cursor: "pointer",
                backgroundColor: theme.colors.teal[50],
              },
              transition: "0.3s",
              backgroundColor: theme.colors.teal[50],
            }
          : {
              "&:hover": {
                cursor: "pointer",
                transition: "0.3s",
                backgroundColor: "#e6fffa3d",
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
        color={isChecked ? theme.colors.teal[600] : theme.colors.gray[600]}
        pb={2}
      >
        {value}
      </Text>
      <Text color={"black"}>
        <span css={{ fontWeight: 500 }}>
          <b>
            <span css={{ fontSize: 24 }}>{size}</span> GB
          </b>
        </span>{" "}
        <span css={{ fontWeight: 600, color: theme.colors.gray[600] }}>
          {" "}
          uploads
        </span>
      </Text>
      <Text fontWeight={600} color={theme.colors.gray[600]}>
        <span>
          $ <span css={{ fontWeight: 700, color: theme.colors.black }}>5 </span>
        </span>
        / month
      </Text>
    </Button>
  );
});

const Billing = ({ values, ...formProps }) => {
  const { lg, md: medium, xl, sm: small } = theme.breakpoints;

  const md = useMedia(`(min-width: ${medium})`);
  const [plan, setPlan] = React.useState("BASIC");

  return (
    <Grid templateColumns={md ? "1fr 2fr" : "1fr"} p={4} mt={2}>
      <Box mr={8} mb={4}>
        <Text fontSize="xl" mb={4}>
          Billing
        </Text>
        <Text color="gray.500">
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
            border={`1px solid ${theme.colors.gray[300]}`}
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
