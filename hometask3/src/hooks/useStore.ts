import { useState } from "react";

export const useStore = () => {
  const [keyword, setKeyword] = useState<string>('');
  const [filters, setFilters] = useState<string[]>([]);

  return {
    filters,
    keyword,
    setKeyword,
    setFilters
  }
}