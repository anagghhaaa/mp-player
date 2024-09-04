import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <>
      <div className='bg-light py-2 container-fluid'>
        <Row className='p-5'>
          <Col sm={12} md={5}>
            <h3>Media Player 2024</h3>
            <p style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam repellendus fugiat magnam reiciendis aut possimus, tempora, ad sit quam consectetur vero eum consequuntur, architecto nobis reprehenderit ipsum molestias mollitia nemo.
            </p>
          </Col>
          <Col sm={12} md={2} >
            <h3>Links</h3>
            <div className='d-flex flex-column'>
              <Link to={'/'}>Landing</Link>
              <Link to={'/home'}>Home</Link>
              <Link to={'/history'}>Watch History</Link>
            </div>
          </Col>
          <Col sm={12} md={5}>
            <h3>Feedback</h3>
            <textarea name="" id="" className='form-control'></textarea>
            <button className='btn btn-primary mt-3'>Send</button>
          </Col>
        </Row>
        <h6 className='text-center'>Media Player 2024 &copy; all rights reserved</h6>
      </div>
    </>
  )
}

export default Footer