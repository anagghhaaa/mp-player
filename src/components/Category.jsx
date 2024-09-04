import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory } from '../service/allapis';
import { toast } from 'react-toastify';
import Categorylist from './Categorylist';
function Category() {
    const [show, setShow] = useState(false);
    const [category,setCategory]=useState({
        categoryId:'',title:'',videos:[]
    })
       const [addresponse,setAddresponse] =useState("")
     
     const handleCategory=async()=>{
        console.log(category);
        const {categoryId,title}=category
        if(!category || !title){
            toast.warning('Enter valid Inputs !!')
        }else{
            const result=await addCategory(category)
            console.log(result);
            if(result.status==201){
                toast.success("category added!!")
              handleClose()
              setCategory({
                categoryId:'',title:'',videos:[]
              })
              setAddresponse(result)
            }
            else{
                toast.error("Category Adding Failed!!")
            }
        }
     }
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
                        <Form.Control type="number" onChange={(e)=>{setCategory({...category,categoryId:e.target.value})}} placeholder="category id" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingId" label="Category Name" className="mb-3">
                        <Form.Control type="text" onChange={(e)=>{setCategory({...category,title:e.target.value})}} placeholder="category name" />
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success" onClick={handleCategory}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>
            <Categorylist response={addresponse}/>




        </>
    )
}

export default Category