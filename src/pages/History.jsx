import React,{useEffect,useState} from 'react'
import { getHistory,deleteHistory } from '../service/allapis'
function History() {
  const [history,setHistory]=useState([])
  useEffect(()=>{
      getData()
     
  },[])
  const getData=async()=>{
      const result=await getHistory()
      console.log(result);
        if(result.status==200){
          console.log(result.data);
          
          setHistory(result.data)
        }else{
          console.log(result);
          
        }
      
  }
  const deletehis=async(id)=>{
    const result =await deleteHistory(id)
    console.log(result);
    if(result.status==200){
        getData()
    }
}
  return (
    <>
    
    <div className='p-5'>
      <h1>Watch History</h1>
      {
        history.length>0?
        <table className='table table-bordered'>
       <thead>
        <tr>
         <th>Video ID</th>
         <th>Title</th>
         <th>Video URL</th>
         <th>Date and Time</th>
         <th></th>
        </tr>
       </thead>
       <tbody>
        {
          history.map((item)=>(
            <tr>
            <td>{item.videoId}</td>
            <td>{item.title}</td>
            <td>{item.url}</td>
            <td>{item.datetime}</td>
            <td>
              <button className='btn' onClick={()=>{deletehis(item.id)}}>
              <i className="fa-solid fa-trash" style={{ color: "#e5153f", }} />
  
              </button>
            </td>
          </tr>
        
          ))
        }
        
         </tbody>
     </table>
        
 :
 <h3>No History Available</h3>
      }
      </div>
      
      
      </>
  )
}

export default History