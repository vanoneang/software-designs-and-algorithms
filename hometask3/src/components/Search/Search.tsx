import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import styles from './Search.module.scss';

interface SearchProps {
  keyword?: string;
  setKeyword?: (val) => void;
}

export function Search({ keyword, setKeyword }: SearchProps) {

  return (
    <OutlinedInput
      className={styles.input}
      placeholder="Search by country/name/username"
      value={keyword}
      type="search"
      onChange={(e) => setKeyword(e.target.value)}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}
