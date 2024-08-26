import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function VideoCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ cursor: 'pointer' }} onClick={handleShow} src="https://i.ytimg.com/vi/KDjmKFjxXt0/maxresdefault.jpg" />
                <Card.Body>
                    <Card.Title>Heeriye</Card.Title>
                    <Button variant="btn">
                        <i className="fa-solid fa-trash" style={{ color: "#e5153f", }} />
                    </Button>
                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/RLzC55ai0eo?autoplay=1" title="Heeriye (Official Video) Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>



        </>
    )
}

export default VideoCard