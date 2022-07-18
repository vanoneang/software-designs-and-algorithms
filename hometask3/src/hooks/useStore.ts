import { useState } from "react";

export const useStore = () => {
  const [keyword, setKeyword] = useState<string>('');

  return {
    keyword,
    setKeyword
  }
}