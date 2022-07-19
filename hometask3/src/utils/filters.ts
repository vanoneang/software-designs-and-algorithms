import { FilterFunction, Row } from "../components";

export const filterRowData = (filterFns: FilterFunction[], rows: Row[]) => {
  const meaningfulFilter = filterFns.filter(filter => !!filter);
  if (!meaningfulFilter.length) {
    return rows;
  }
  return rows.filter(row => meaningfulFilter.some(fn => fn(row)));
}

export const keywordFilter = (keyword: string) => (row: Row) => 
  row.country.toLowerCase().includes(keyword.toLowerCase()) 
  || row.username.toLowerCase().includes(keyword.toLowerCase())
  || row.name.toLowerCase().includes(keyword.toLowerCase())

export const minPostsFilter = (posts: number) => (row: Row) => row.posts > posts;

export const withoutPostsFilter = (row: Row) => row.posts === 0;