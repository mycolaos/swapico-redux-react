import React from 'react'
import { Link } from 'react-router'
import { pages } from '../constants/NavLinks'

const App = ({ children }) => (
  <div className='app-container'>
    <nav className='nav'>
      <Link className='btn' to={ pages.SEARCH } > Search </Link>
      <Link className='btn' to={ pages.EDIT } > Edit </Link>
      <Link className='btn' to={ pages.STATS } > Stats </Link>
    </nav>
    <div className='app-page-container'>
      { children }
    </div>
  </div>
)

export default App