"use client";

import {
  Box,
  TablePagination as MuiTablePagination,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { PaginationProps } from "./types";

const TablePagination: FC<PaginationProps> = ({
  count,
  rowsPerPage = 10,
  page = 1,
  onPageChange,
  padding,
  marginBottom,
}) => {
  const totalPages = Math.ceil(count / rowsPerPage);

  const currentPage = Math.min(Math.max(page, 1), totalPages);

  const generatePageNumbers = () => {
    const pageNumbers = [];
    const maxDisplayPages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxDisplayPages / 2));
    const endPage = Math.min(totalPages, startPage + maxDisplayPages - 1);

    if (endPage === totalPages) {
      startPage = Math.max(1, totalPages - maxDisplayPages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages && onPageChange) {
      onPageChange(newPage);
    }
  };

  return (
    <MuiTablePagination
      rowsPerPageOptions={[]}
      component={"div"}
      count={count}
      rowsPerPage={rowsPerPage}
      page={currentPage - 1}
      onPageChange={(_, newPage) => handlePageChange(newPage + 1)}
      sx={{
        overflow: "inherit",
        "& .MuiToolbar-root": {
          height: "32px",
          minHeight: "32px",
        },
      }}
      ActionsComponent={() => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            marginBottom: marginBottom || 2,
            padding: padding || "20px 40px 12px 20px",
          }}
        >
          {/* Previous Button */}
          <Box
            component={"button"}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 32,
              height: 32,
              borderRadius: "4px",
              border: "1px solid #9F9E9E",
              cursor: currentPage === 1 ? "not-allowed" : "pointer",
              opacity: currentPage === 1 ? 0.5 : 1,
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor: currentPage === 1 ? "transparent" : "#F1F1F1",
              },
            }}
          >
            <Typography>{"<"}</Typography>
          </Box>

          {/* Page Numbers */}
          {generatePageNumbers().map((pageNumber) => (
            <Box
              key={pageNumber}
              component={"button"}
              onClick={() => handlePageChange(pageNumber)}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 32,
                height: 32,
                borderRadius: "4px",
                border: "1px solid #9F9E9E",
                backgroundColor:
                  pageNumber === currentPage ? "#02257C" : "white",

                borderColor: pageNumber === currentPage ? "#02257C" : "#9F9E9E",
                cursor: "pointer",
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: pageNumber === currentPage ? "white" : "#4C4C4C",
                }}
              >
                {pageNumber}
              </Typography>
            </Box>
          ))}

          {/* Next Button */}
          <Box
            component={"button"}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 32,
              height: 32,
              borderRadius: "4px",
              border: "1px solid #9F9E9E",
              cursor: currentPage === totalPages ? "not-allowed" : "pointer",
              opacity: currentPage === totalPages ? 0.5 : 1,
              backgroundColor: "transparent",
              "&:hover": {
                backgroundColor:
                  currentPage === totalPages ? "transparent" : "#F1F1F1",
              },
            }}
          >
            <Typography>{">"}</Typography>
          </Box>
        </Box>
      )}
    />
  );
};

export default TablePagination;
