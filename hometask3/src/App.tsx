import { StyledEngineProvider } from '@mui/material/styles';

import { Table, Filters, Sort, Search } from './components';
import { useData } from './hooks/useData';

import styles from './App.module.scss';

function App() {

  const data = useData()

  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <div className={styles.container}>
          <div className={styles.sortFilterContainer}>
            <Filters />
            <Sort />
          </div>
          <Search />
        </div>
        <Table rows={data} />
      </div>
    </StyledEngineProvider>
  );
}

export default App;
