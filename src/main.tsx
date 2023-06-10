import React from 'react'
import ReactDOM from 'react-dom/client'
import "./global/styles.css";
import App from './layout/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
