/** @jsx jsx */
import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  Text,
  theme,
  Icon,
} from "@chakra-ui/core";
import { jsx, css } from "@emotion/core";
import { withTheme } from "emotion-theming";
import React from "react";
import makeData from "../../../../utils/makeData";
import Table from "../../../../components/Table";

import useMedia from "use-media";

const InvoiceTable = () => {
  const { lg, md: medium, xl, sm: small } = theme.breakpoints;

  const md = useMedia({ minWidth: medium });

  const columns = React.useMemo(
    () =>
      md
        ? [
            {
              Header: "Client",
              accessor: "client",
              Cell: ({
                row: {
                  original: { client, src, email = "" },
                },
              }) => (
                <Flex align="center">
                  <Avatar size="sm" name="random-image" src={src} mr={4} />
                  <Box>
                    <Text>{client}</Text>
                    <Text color="#6b7280">{email}</Text>
                  </Box>
                </Flex>
              ),
              textAlign: "left",
            },
            {
              Header: "Issue Date",
              accessor: "issueDate",
              textAlign: "right",
            },

            {
              Header: "Due Date",
              accessor: "dueDate",
            },
            {
              Header: <Box textAlign="right">Amount</Box>,
              accessor: "amount",
              Cell: ({
                row: {
                  original: { amount },
                },
              }) => <Box textAlign="right">{amount}</Box>,
            },
            {
              Header: "Status",
              accessor: "status",
              Cell: ({
                row: {
                  original: { status },
                },
              }) => (
                <Badge
                  borderRadius="999px"
                  px={3}
                  py={"2px"}
                  variantColor={
                    status === "Pending"
                      ? "orange"
                      : status === "Paid"
                      ? "green"
                      : status === "Overdue"
                      ? "red"
                      : ""
                  }
                  fontWeight={600}
                  textTransform="capitalize"
                >
                  {status}
                </Badge>
              ),
              textAlign: "center",
            },
            {
              Header: "",
              accessor: "no",
              Cell: () => (
                <Button variant="link" fontWeight={500} color="blue.700">
                  View
                </Button>
              ),
              width: 80,
            },
          ]
        : [
            {
              Header: <Box textAlign="left">Client</Box>,
              accessor: "client",
              Cell: ({
                row: {
                  original: { client, src, email = "" },
                },
              }) => (
                <Box textAlign="left">
                  <Text>{client}</Text>
                  {/* <Text color="#6b7280">{email}</Text> */}
                </Box>
              ),
            },
            {
              Header: <Box textAlign="right">Amount</Box>,
              accessor: "amount",
              Cell: ({
                row: {
                  original: { amount, status },
                },
              }) => (
                <Flex align="center" justify="flex-end">
                  <Box
                    css={css`
                      background-color: ${status === "Pending"
                        ? theme.colors.orange[300]
                        : status === "Paid"
                        ? theme.colors.green[300]
                        : status === "Overdue"
                        ? theme.colors.red[300]
                        : ""};
                      width: 14px;
                      height: 14px;
                      border-radius: 50%;
                    `}
                    mr={3}
                  ></Box>
                  <Box textAlign="right">{amount}</Box>
                </Flex>
              ),
            },

            {
              Header: "",
              accessor: "no",
              Cell: () => {
                return <Icon name="chevron-right"></Icon>;
              },
              width: 10,
              textAlign: "center",
            },
          ],
    [md]
  );

  const data = React.useMemo(() => makeData(20), []);

  return data.length > 0 ? (
    <Table data={data} columns={columns} noDataText="No result" />
  ) : (
    <Flex
      justify="center"
      align="center"
      direction="column"
      boxShadow="0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      minHeight={400}
      borderRadius={6}
    >
      <NoDataImage viewBox="0 0 1200 800" width="340px" height="260px" />
      <Text color="gray.500">There is no client yet 🍃</Text>
    </Flex>
  );
};

export default withTheme(InvoiceTable);
