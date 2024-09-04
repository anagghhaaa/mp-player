import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addVideos } from '../service/allapis';
import { toast } from 'react-toastify';
function Addvideo({response}) {

    const [show, setShow] = useState(false);
    const [video,setVideo] = useState({
        videoId:"",title:"",imageUrl:"",videoUrl:""
    })
    
    const handleupload=async()=>{
        console.log(video);
      const {videoId,title,imageUrl,videoUrl}=video
      if(!videoId || !title || !imageUrl || !videoUrl){
            // alert("please enter valid output")
            toast.warning('please enter valid output')
      }
      else{
        try{
            const vurl=videoUrl.split('v=')[1]
            const eurl=`https://www.youtube.com/embed/${vurl}?si=rDfudB55YjjHM0Dk&autoplay=1`
             video.videoUrl=eurl
            const res=await addVideos(video)
            console.log(res)
            if(res.status==201){
                // alert('upload Successfull!!')
                toast.success('upload Successfull!!')

                   handleClose()
                   response(res)
            }
            else{
                // alert('upload Failed!!')
                toast.error('upload Failed!!')

            }
        }
        catch(err){
            console.log(err);
            // alert('upload Failed!!')
            toast.error('upload Failed!!')

        }
        
      }
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className='btn' onClick={handleShow}>
                <i className="fa-solid fa-folder-plus fs-4" style={{ color: "#FFD43B", }} />    </button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Video </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FloatingLabel controlId="floatingId" label="Video ID" className="mb-3">
                        <Form.Control type="number" placeholder="1" onChange={(e)=>{setVideo({...video,videoId:e.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="vtitle" label="Video Title" className="mb-3">
                        <Form.Control type="text" placeholder="title" onChange={(e)=>{setVideo({...video,title:e.target.value})}} />
                    </FloatingLabel>
                    <FloatingLabel controlId="imgurl" label="Video Image URL"className="mb-3">
                        <Form.Control type="text" placeholder="url" onChange={(e)=>{setVideo({...video,imageUrl:e.target.value})}}/>
                    </FloatingLabel>
                    <FloatingLabel controlId="vurl" label=" Youtube Video URL"className="mb-3">
                        <Form.Control type="text" placeholder="url" onChange={(e)=>{setVideo({...video,videoUrl:e.target.value})}}/>
                    </FloatingLabel>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="warning" onClick={handleupload}>Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Addvideo