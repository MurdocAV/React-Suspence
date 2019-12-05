import React from 'react'

class App extends React.Component {
  render () {
    return (
      <Suspense fallback={<h2>Loading content...</h2>}>
        <h1>238091208301283</h1>
      </Suspense>
    )
  }
}

export default App
