import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './components/Input'
import Output from './components/Output'
import Nested from './components/Nested'

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import nameApp from './reducers'

import { updateName, updateAge } from './actions'


function App() {

  let store = createStore(nameApp, {})
  store.subscribe(() => console.log(store.getState()))
  
  return (
    <Provider store={store}>
    <div className="App">
      <Input />
      <Output />

      <Nested>
        <Nested>
          <Nested>
            <Nested>
              <Nested>
                <Output />
              </Nested>
            </Nested>
          </Nested>
        </Nested>
      </Nested>
    </div>
    </Provider>
  );
}

export default App;
