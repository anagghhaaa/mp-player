import React ,{useState,useEffect}from 'react'
import { Row, Col } from 'react-bootstrap'
import Addvideo from '../components/Addvideo'
import Videos from '../components/Videos'
import Category from '../components/Category'
import { Link } from 'react-router-dom'
function Home() {
  const [addResponse,setAddResponse]=useState('')
  const [username,setUsername]=useState('')
  useEffect(()=>{
    const user=JSON.parse(sessionStorage.getItem('userData'))
    setUsername(user?.username)
  },[])
  return (
    <>

        <h2 className='p-2'>Welcome {username}</h2>
      <div className='d-flex justify-content-between p-4'>
        <h1 >Videos</h1>
           <Link to={'/history'}>Watch History</Link>
      </div>
      <div className='container-fluid'>
        <Row>
          <Col sm={12} md={1}>
            <Addvideo  response={setAddResponse}/>
          </Col>
          <Col sm={12} md={8}>
            <Videos add={addResponse} />
          </Col>
          <Col sm={12} md={3}>
            <Category />
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Home

