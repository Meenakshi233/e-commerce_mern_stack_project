import React from 'react';
import AppContext from './context/AppContext';
import { useContext } from 'react';

const App = () => {
  // const {data} = useContext(AppContext);
  return (
    <div>App {data}</div>
  )
}

export default App;