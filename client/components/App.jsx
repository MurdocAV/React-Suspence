import React from 'react'
import MainPage from './Home/MainPage'
import {HashRouter, Route} from 'react-router-dom'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Header />
        <Route exact path="/" component={MainPage} />
      </HashRouter>
    )
  }
}

export default App
