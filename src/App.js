import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import ProgressSelection from './components/ProgressSelection';

import { fetchApi } from './actions/apiAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
    return () => {};
  }, []);

  return (
    <div className="App">
      <ProgressSelection />
    </div>
  );
}

export default App;
