import React from 'react';
import MainRouter from './core/routes/router';
import {Provider} from 'react-redux';
import Store from './core/redux/store';


function App() {
  return (
      <Provider store={Store}>
        <MainRouter />
      </Provider>
  );
}

export default App;
