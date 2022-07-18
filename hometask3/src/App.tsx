import { StyledEngineProvider } from '@mui/material/styles';
import styles from './App.module.scss';

import { Table, Filters, Sort, Search } from './components';

import { useData } from './hooks/useData';
import { useStore } from './hooks/useStore';
import { keywordFilter } from './utils/filters';


function App() {

  const data = useData();
  const { keyword, setKeyword } = useStore();
  const filteredData = keywordFilter(keyword)(data);

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters />
            <Sort />
          </div>
          <Search keyword={keyword} setKeyword={setKeyword} />
        </div>
        <Table rows={filteredData} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
