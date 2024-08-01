import React from 'react'
import { ToastContainer , toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import "./resources/global.css"
import Nav from './components/Nav'
import Viewproduct from "./components/Viewproduct.jsx"
import Addproduct from "./components/Addproduct.jsx"
import Home from "./components/Home.jsx"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Updateproduct from './components/Updateproduct.jsx';
const App = () => {


  return (
      <Router>
          <ToastContainer />
          <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/viewproduct' element={<Viewproduct/>}/>
          <Route path='/addproduct' element={<Addproduct/>}/>
          <Route path="/updateproduct/:id" element={<Updateproduct/>}/>
        </Routes>
      </Router>
  )
}

export default App