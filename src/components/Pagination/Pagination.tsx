import ReactPaginate from 'react-paginate';

interface Props {
  pageCount: number;
  setPage: (page: number) => void;
}

export default function Pagination({ pageCount, setPage }: Props) {
  return (
    <ReactPaginate
      pageCount={pageCount}
      onPageChange={(e) => setPage(e.selected + 1)}
    />
  );
}