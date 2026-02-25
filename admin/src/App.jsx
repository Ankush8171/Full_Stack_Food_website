
import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Order from './pages/orders/Orders'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <Sidebar/>
        <Routes>
          <Route path="/add" element={<Add/>}></Route>
          <Route path="/list" element={<List/>}></Route>
          <Route path="/orders" element={<Order/>}></Route>
        </Routes>
      </div> 
      
    </div>
  )
}

export default App
