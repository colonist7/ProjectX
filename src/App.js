import React from 'react';
import MainRouter from './core/routes/router';
import {Provider} from 'react-redux';
import {testStore} from './core/redux/reducers/TestReducer/TestReducer';


function App() {
  return (
      <Provider store={testStore}>
        <MainRouter />
      </Provider>
  );
}

export default App;
