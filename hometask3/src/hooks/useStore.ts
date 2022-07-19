import { useState } from "react";

export const useStore = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [filters, setFilters] = useState<string[]>([]);
  const [sort, setSort] = useState<string>('');

  return {
    sort,
    filters,
    keyword,
    setKeyword,
    setFilters,
    setSort
  }
}