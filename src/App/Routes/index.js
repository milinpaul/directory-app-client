import React from 'react'
import { Route, Switch } from 'react-router-dom'

const LandingPage = React.lazy(() => import('../Pages/Landing'))
const About = React.lazy(() => import('../Pages/About'))

const index = () => {
  return (
    <Switch>
      <Route exact={true} path='/' component={LandingPage} />
      <Route exact={true} path='/about-us' component={About} />
    </Switch>
  )
}

export default index
