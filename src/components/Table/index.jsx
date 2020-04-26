/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { memo, useEffect } from "react";
import { useTable, usePagination } from "react-table";
import { theme, Text, Flex } from "@chakra-ui/core";
import { StyledTable, NoDataRow } from "./styles";

const Table = ({
  columns = [],
  data = [],
  fetchData = () => {},
  loading = false,
  pageCount: controlledPageCount,

  selectedRows = [],
  noDataText = "",
  extraColumnInAction,
  className,
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,

    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
      manualPagination: !!controlledPageCount,
      pageCount: controlledPageCount,
      expandSubRows: false,
    },

    usePagination
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);

  const setTheadTextAlign = (items, idx) => {
    return page.length === 0 || idx !== 0
      ? idx === items.length - 1
        ? "center"
        : "left"
      : "center";
  };

  const setTbodyTextAlign = (items, idx) => {
    return idx === 0 ? "center" : items.length - 1 === idx ? "center" : "left";
  };

  const setTbodyRowBg = (row) => {
    return selectedRows.includes(row.original.id) && theme.colors.gray[200];
  };

  return (
    <StyledTable {...getTableProps()} className={className}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr
            {...headerGroup.getHeaderGroupProps()}
            css={{
              backgroundColor: "#EDF2F77A",
            }}
          >
            {headerGroup.headers.map((column, idx) => {
              const { width, textAlign = "left" } = column;
              return (
                <Text
                  as="th"
                  fontSize="sm"
                  color="gray.500"
                  {...column.getHeaderProps()}
                  css={{
                    textAlign,
                    width,
                    textTransform: "uppercase",
                    fontWeight: 400,
                    padding: "1rem .75rem",
                    letterSpacing: 1.3,
                  }}
                >
                  {column.render("Header")}
                </Text>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(
          (row) =>
            prepareRow(row) || (
              <React.Fragment key={row.index}>
                <tr
                  {...row.getRowProps()}
                  css={{
                    backgroundColor: setTbodyRowBg(row),
                    borderRadius: 2,
                    fontSize: 14,
                  }}
                >
                  {row.cells.map((cell, idx) => {
                    const { width, textAlign } = cell.column;
                    return (
                      <td
                        {...cell.getCellProps()}
                        css={{
                          width,
                          textAlign,
                          padding: "1rem .75rem",
                        }}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              </React.Fragment>
            )
        )}
      </tbody>
    </StyledTable>
  );
};

export default memo(Table);
