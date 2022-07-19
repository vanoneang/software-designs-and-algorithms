import { useState } from 'react';
import Checkbox from '@mui/material/Checkbox';

import styles from './Filters.module.scss';

interface FiltersProps {
  filters?: string[];
  setFilters?: (val: string[]) => void;
}

const OPTIONS = [
  {
    title: 'Without posts',
  },
  {
    title: 'More than 100 posts',
  },
];

export function Filters({ filters, setFilters }: FiltersProps) {

  const onChange = ({ title }) => {
    let updatedFilters;
    if (filters.find((filter) => filter === title)) {
      updatedFilters = filters.filter((filter) => filter !== title);
    } else {
      updatedFilters = [...filters, title];
    }

    setFilters(updatedFilters);
  };

  return (
    <div className={styles.group}>
      <div className={styles.title}>Filter by posts</div>
      <ul className={styles.list}>
        {OPTIONS.map((option) => (
          <li
            value={option.title}
            onClick={() => onChange(option)}
            key={option.title}
          >
            <Checkbox
              checked={!!filters.find(filter => filter === option.title)}
              value={option.title}
              onChange={() => onChange(option)}
              size="small"
              color="primary"
            />{' '}
            {option.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
