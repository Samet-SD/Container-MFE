import React from 'react'
import Payments from './components/Payments'
import Structure from './components/Structure'
import Transactions from './components/Transactions'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


const App = () => {
  return (
    <BrowserRouter>
    <div>
    <Structure />
    <Switch>
    <Route path="/transactions">
      <Transactions />
    </Route>
    <Route path="/payments">
      <Payments />
    </Route>
    </Switch>
    </div>
    </BrowserRouter>
  )
}
//So we can render some other content inside of react app and show inside of here at the same time the payments app
export default App
//<Payments />
//<Structure />  