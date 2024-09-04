import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
function Header() {
  const nav=useNavigate()

  const logout=()=>{
    nav('/')
    sessionStorage.removeItem('userData')
  }

  return (
  <>
 
 <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-brands fa-youtube fa-beat"  style={{color: "#1174c0",}} />
            {' '}
           Media Player
          </Navbar.Brand>
        </Container>
        <button className='btn btn-info me-4' onClick={logout}>LOGOUT</button>
      </Navbar>
  </>
)
}


export default Header