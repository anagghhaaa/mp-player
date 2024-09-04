 import { useState } from 'react'
 import './App.css'
 import './bootstrap.min.css'
 import 'react-toastify/dist/ReactToastify.css'
 import Home from './pages/Home'
 import History from './pages/History'
 import Landing from './pages/Landing'
 import Header from './components/Header'
 import Footer from './components/Footer'
 import Login from './pages/Login'
 import Register from './pages/Register'
 import { Routes,Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
  function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
     </Routes>
     <Footer/>
     <ToastContainer/>

       </>
  )
}

export default App




