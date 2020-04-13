import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import ProgressGroup from './components/ProgressGroup';

import { fetchApi } from './actions/apiAction';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApi());
    return () => {};
  }, []);

  return (
    <div className="App">
      <ProgressGroup />
    </div>
  );
}

export default App;
