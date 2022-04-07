import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

const store = configureStore()

store.subscribe(()=>{
  // console.log('state:', store.getState())
})

const container = document.getElementById('root')

const root = createRoot(container)

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);