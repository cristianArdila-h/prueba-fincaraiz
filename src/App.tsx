import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore({});
function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
