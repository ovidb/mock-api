import 'typeface-roboto';
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore.dev';
import rootSaga from './sagas';
import App from './components/App';

const store = configureStore();
store.runSaga(rootSaga);

ReactDOM.render(<App store={store} />, document.getElementById('root'));
