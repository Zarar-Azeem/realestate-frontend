import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App, { socket } from './App.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { baseApi } from './api/api.js'

const root = ReactDOM.createRoot(document.getElementById('root')!);

store.dispatch(baseApi.endpoints.getProperties.initiate({}))



root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
