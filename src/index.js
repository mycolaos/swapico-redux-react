import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route,  hashHistory } from 'react-router'
import configureStore from './store/configureStore'
import './styles/app.css'
import { pages } from './constants/NavLinks'
import App from './components/App'
import SearchPage from './containers/SearchPage'
import EditPage from './containers/EditPage'
import ChartsPage from './containers/ChartsPage'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={hashHistory}>
        <Route path='/' component={App}>
          <Route path={ pages.SEARCH } component={SearchPage} />
          <Route path={ pages.EDIT } component={EditPage} />
          <Route path={ pages.STATS } component={ChartsPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)