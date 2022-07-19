import { StyledEngineProvider } from '@mui/material/styles';
import styles from './App.module.scss';

import { Table, Filters, Sort, Search } from './components';

import { useData } from './hooks/useData';
import { useStore } from './hooks/useStore';
import { keywordFilter, filterRowData, minPostsFilter, withoutPostsFilter, sortByPayments } from './utils/filters';

function App() {

  const data = useData();
  const { keyword, setKeyword, filters, setFilters, sort, setSort } = useStore();
  const filteredData = filterRowData([
    keyword ? keywordFilter(keyword) : null, 
    filters.includes('More than 100 posts') ? minPostsFilter(100) : null, 
    filters.includes('Without posts') ? withoutPostsFilter : null]
  , data)
  const sortedData = sortByPayments(filteredData, sort);
  

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters filters={filters} setFilters={setFilters}  />
            <Sort setSort={setSort}/>
          </div>
          <Search keyword={keyword} setKeyword={setKeyword} />
        </div>
        <Table rows={sortedData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
