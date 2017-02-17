import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import configureStore from './configureStore';

import MainPage from './pages/MainPage';

import './styles/styles.sass';

const store = configureStore();

const renderRoot = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MainPage />
      </Provider>
    </AppContainer>,
    document.getElementById('content')
  );
};

renderRoot();

if (module.hot) {
  module.hot.accept('./pages/MainPage', renderRoot);
}
