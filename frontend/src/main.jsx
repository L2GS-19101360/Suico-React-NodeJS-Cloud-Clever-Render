import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import CreatePersonModal from './components/CreatePersonModal.jsx'
import SearchBar from './components/SearchBar.jsx'
import PersonsTable from './components/PersonsTable.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App} />
    </Router>
  </div>
)
