 import React from 'react'
 import { Row, Col } from 'react-bootstrap'
 import { Link } from 'react-router-dom'
 import Card from 'react-bootstrap/Card';
 function Landing() {
  return (
    <>
      <div className='container-fluid mb-5 mt-5 d-flex align-items-center text-center' style={{height:'80vh'}}>
        <Row>
          <Col className='p-5' sm={12} md={6}>
            <h2>
              <i className="fa-brands fa-youtube "  style={{color: "#1174c0",}} />

              Media Player 2024
            </h2>
            <p className='mt-5' style={{ textAlign: 'justify' }}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta sed mollitia,
               quod voluptatum ea praesentium ipsam exercitationem nemo quis tempora quibusdam, officiis suscipit rerum in delectus doloremque. Exercitationem, necessitatibus deleniti
               quod voluptatum ea praesentium ipsam exercitationem nemo quis tempora quibusdam, officiis suscipit rerum in delectus doloremque. Exercitationem, necessitatibus deleniti. </p>
            <div className='d-grid'> 
              <Link to={'/login'} className='btn btn-info'>Let's Go</Link>
            </div>
          </Col>
          <Col className='py-4' sm={12} md={6}>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/music-player-12046013-9833109.png?f=webp" className='img-fluid rounded' alt="introimg" />
          </Col>
        </Row>
      </div>
   <div className='container-fluid mt-5'>
    <h3 className='my-3 text-center'>Features</h3>
  <div className='p-4 d-flex justify-content-around'>
  
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src=" https://i.gifer.com/fyFl.gif" />
      <Card.Body>
        <Card.Title>Upload Youtube Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://www.bakemyweb.com/files/public/de/69/2770cae8aabc7706c58dde69/i/af/bc/64f1b7f4c4d470001e9aafbc/original?name=24.gif-upload.gif&mimetype=image/gif&cd=inline " />
      <Card.Body>
        <Card.Title>Add Categories</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
     
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={'200px'} src="https://i.pinimg.com/originals/e6/c5/d2/e6c5d20dccaf975132123b9f8ef808c6.gif " />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>

  </div>
   </div>

 <div className='p-5'>
 <Row>
  <Col sm={12} md={7}>
 <h4>Simple And Faster</h4>
 <p style={{textAlign:'justify'}}> 
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium qui, praesentium ratione doloribus, consectetur minus ipsa neque amet tempore ipsam facere. Sit aspernatur blanditiis vitae mollitia quaerat quae placeat veritatis!
   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum cupiditate incidunt iste porro, illo nostrum accusamus modi omnis sed. Iste odit asperiores nihil unde voluptatem quidem porro magnam ut nostrum?
    </p>
  </Col>
  <Col sm={12} md={5}>
  <iframe width="500" height="350" src="https://www.youtube.com/embed/th_aRJ2EQT4" title="The New Media Player App for Windows 10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  </Col>
 </Row>
 </div>

    </>

  )
 } 
 export default Landing 