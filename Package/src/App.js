import React from 'react'
//import Payments from './components/Payments'
//import Structure from './components/Structure'
import Transactions from './components/Transactions'
const App = () => {
  return (
    <div>
    <Structure />  
    <Transactions />
    <Payments />
    </div>
  )
}
//So we can render some other content inside of react app and show inside of here at the same time the payments app
export default App