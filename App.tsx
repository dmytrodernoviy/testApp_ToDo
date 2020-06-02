import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@src/redux';
import AppStack from '@src/navigation/AppStack';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default App;
