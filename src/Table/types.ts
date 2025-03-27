import { TableCellProps } from "@mui/material/TableCell";
import { TableContainerProps } from "@mui/material/TableContainer";
import { TypographyProps } from "@mui/material/Typography";
import { TableProps as MuiTableProps } from "@mui/material/Table";
import React from "react";
import { PaginationProps } from "../TablePagination/types";
import { BoxProps } from "@mui/material/Box";

export interface ActionColumns {
  actions: object;
}

export interface ColumnType<T extends object> {
  id: keyof T | "actions";
  label: string;
  minWidth?: number;
  align?: TableCellProps["align"];
  sortable?: boolean;

  /* if no data key is provided
  id will be considered as dataKey
  */
  dataKey?: keyof T;
  type?: "default" | "image";
  // eslint-disable-next-line no-unused-vars
  render?: (data: T) => React.ReactNode;
}

export interface TableProps<T extends object> {
  columns: ColumnType<T>[];
  isLoading?: boolean;
  children?: React.ReactNode;
  data: T[];
  noData?: React.ReactNode;
  slotProps?: {
    root?: TableContainerProps;
    table?: MuiTableProps;
  };
}
