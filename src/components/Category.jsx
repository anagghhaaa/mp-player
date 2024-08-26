import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
function Category() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className=''>
                <button className='btn btn-success d-grid w-100 ' onClick={handleShow}>ADD CATEGORY</button>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Category</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingId" label="Category ID" className="mb-3">
                        <Form.Control type="text" placeholder="category id" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingId" label="Category Name" className="mb-3">
                        <Form.Control type="text" placeholder="category name" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>




        </>
    )
}

export default Category