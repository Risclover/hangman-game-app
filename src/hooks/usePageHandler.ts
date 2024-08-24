import { useState } from "react";

export function usePageHandler(initialPage: number) {
  const [page, setPage] = useState(initialPage);
  return [page, setPage] as const;
}
