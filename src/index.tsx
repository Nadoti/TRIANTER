import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('transiction', () => {
      return [
        {
          id: 1,
          nome: 'João'
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
