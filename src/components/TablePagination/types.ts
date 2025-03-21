export interface PaginationProps {
  count: number;
  rowsPerPage?: number;
  page: number;
  padding?: string;
  marginBottom?: string;
  onPageChange?: (page: number) => void;
}
