 import { useState } from 'react'
 import './App.css'
 import './bootstrap.min.css'
 import Home from './pages/Home'
 import History from './pages/History'
 import Landing from './pages/Landing'
 import Header from './components/Header'
 import Footer from './components/Footer'
 import { Routes,Route } from 'react-router-dom'

  function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/history' element={<History/>}/>
     </Routes>
     <Footer/>

       </>
  )
}

export default App
