import React from 'react'
// import { StylesProvider, MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Provider } from 'react-redux'

import { GlobalStyles } from './Styles/GlobalStyles'
import Store from './Store'
import theme from './Theme'
import Layout from './Components/Layout'
import Routes from './Routes'
import Loader from './Components/Loader'

const history = createBrowserHistory()

function App() {
  return (
    <Provider store={Store}>
      {/* <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}> */}
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Layout>
            <React.Suspense fallback={<Loader />}>
              <Routes />
              <GlobalStyles />
            </React.Suspense>
          </Layout>
        </Router>
      </ThemeProvider>
      {/* </MuiThemeProvider>
      </StylesProvider> */}
    </Provider>
  )
}

export default App
