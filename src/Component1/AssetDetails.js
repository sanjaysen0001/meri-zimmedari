import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Mynavbar from './Mynavbar'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{justifyContent:'right',display:'flex', padding:'0.1rem 0.1rem',border:'none'}}>
      <div >
      <svg style={{cursor:'pointer'}} onClick={props.onHide} viewBox="0 0 512 512" width="40" height="40" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512">
<path d="M256 33C132.3 33 32 133.3 32 257s100.3 224 224 224 224-100.3 224-224S379.7 33 256 33zm108.3 299.5c1.5 1.5 2.3 3.5 2.3 5.6 0 2.1-.8 4.2-2.3 5.6l-21.6 21.7c-1.6 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3L256 289.8l-75.4 75.7c-1.5 1.6-3.6 2.3-5.6 2.3-2 0-4.1-.8-5.6-2.3l-21.6-21.7c-1.5-1.5-2.3-3.5-2.3-5.6 0-2.1.8-4.2 2.3-5.6l75.7-76-75.9-75c-3.1-3.1-3.1-8.2 0-11.3l21.6-21.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l75.7 74.7 75.7-74.7c1.5-1.5 3.5-2.3 5.6-2.3 2.1 0 4.1.8 5.6 2.3l21.6 21.7c3.1 3.1 3.1 8.2 0 11.3l-75.9 75 75.6 75.9z" fill="#eb1515" class="fill-000000">
</path></svg>
      </div>
       
      </Modal.Header>
      <Modal.Body>
      <div className='cssfornomineeformobileview' style={{overflow:'auto'}}>
      <table className="table" >
      <thead>
        <tr style={{backgroundColor:'rgb(176, 193, 219)'}}>
          <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'700',fontSize:'18px',color:'rgb(43, 77, 129)',borderRight:'2px solid white' ,fontFamily:'Calibri'}}>
          <div style={{textAlign:'center',lineHeight:'20px'}}><span>Nominee</span><br></br><span>Name<span style={{color:'red'}}>*</span></span> </div>
          </th>
          <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'700',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'rgb(43, 77, 129)',borderRight:'2px solid white'}}>
          <div style={{textAlign:'center',lineHeight:'20px'}}><span>Relation with </span><br></br><span>Nominee <span style={{color:'red'}}>*</span></span> </div>
          </th>
          <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'700',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'rgb(43, 77, 129)',borderRight:'2px solid white'}}>
          <div style={{textAlign:'center',lineHeight:'20px'}}><span>Percentage of </span><br></br><span>share <span style={{color:'red'}}>*</span></span> </div>
          </th>
          <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'700',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'rgb(43, 77, 129)',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>
          <div style={{textAlign:'center',lineHeight:'20px'}}><span>Nominee</span><br></br><span>Phone No.<span style={{color:'red'}}>*</span></span> </div>
          </th>
          <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'700',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'rgb(43, 77, 129)',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>
          <div style={{textAlign:'center',lineHeight:'20px'}}><span>Nominee</span><br></br><span>Mail ID
          </span> </div>
          </th>
         
         
        </tr>
      </thead>
      <tbody style={{border:'none'}}>
        <tr style={{borderTop:"white"}}>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='text' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='text' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='tel' placeholder='XX' style={{border:'none',width:'50%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
         %
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='tel'  style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='email' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        
        
        
       
        
       
        </tr>
        <tr style={{borderTop:"white"}}>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='text' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='text' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='tel' placeholder='XX' style={{border:'none',width:'50%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
         %
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='tel'  style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='email' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        
        
        
       
        
       
        </tr>
        <tr style={{borderTop:"white"}}>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='text' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='text' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='tel' placeholder='XX' style={{border:'none',width:'50%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
         %
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='tel'  style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='email' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        
        
        
       
        
       
        </tr>
        <tr style={{borderTop:"white"}}>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='text' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='text' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='tel' placeholder='XX' style={{border:'none',width:'50%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
         %
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='tel'  style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        <th scope="col" style={{textTransform: "capitalize",width:'20%',fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',textAlign:'center',lineHeight:"15px"}}>
        <div style={{border:'1px solid rgb(176, 193, 219)',height:'2.5rem',paddingTop:'7px',borderRadius:'10px'}}>
        <input type='email' style={{border:'none',width:'100%',outline:'none',paddingLeft:'5px',paddingRight:'5px'}}/>
        </div>
        </th>
        
        
        
       
        
       
        </tr>
        
        
      </tbody>
    </table>
      </div>
      </Modal.Body>
      
    </Modal>
  );
}



const AssetDetails = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <>
    <Mynavbar/>
    

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    <div >
    <p  style={{fontSize:'22px',color:'rgb(43, 77, 129)' ,fontWeight:'400', backgroundImage: "linear-gradient(to right, rgb(194, 215, 233) , rgb(229, 234, 238))"}}>
    <span className='ml-3'>My Account </span>
    <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
</svg>
    </span>
    <span> Asset Details</span>
    </p>
    </div>
    <div className='container'>

    
    <div style={{ overflowX: 'auto' }}>
    
    <table className="table" >
  <thead>
    <tr style={{backgroundColor:'rgb(43, 77, 129)',width:'100%'}}>
      <th scope="col" style={{textTransform: "capitalize",fontWeight:'bold',fontSize:'18px',color:'white',width:'14%',borderRight:'2px solid white' ,fontFamily:'Calibri'}}><div className='d-flex justify-content-center' >Asset Type</div></th>
      <th scope="col" style={{textTransform: "capitalize",fontWeight:'bold',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'white',width:'14%',borderRight:'2px solid white'}}><div className='d-flex justify-content-center' >Company Name</div></th>
      <th scope="col" style={{textTransform: "capitalize",fontWeight:'bold',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'white',width:'14%',borderRight:'2px solid white'}}><div className='d-flex justify-content-center' >Unique ID Name</div></th>
      <th scope="col" style={{textTransform: "capitalize",fontWeight:'bold',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'white',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>Unique ID Number</th>
      <th scope="col" style={{textTransform: "capitalize",fontWeight:'bold',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'white',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>Supporting Document
      </th>
      <th scope="col" style={{textTransform: "capitalize",fontWeight:'bold',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'white',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>Nominee Detail
      </th>
      <th scope="col" style={{textTransform: "capitalize",fontWeight:'bold',fontSize:'18px',fontFamily:'Calibri',textAlign:'center',color:'white',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"20px"}}>Action
      </th>
     
    </tr>
  </thead>
  <tbody>
    <tr style={{backgroundColor:'rgb(176, 193, 219)',width:'100%'}}>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Term <br></br>Insurance
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Bajaj Allianz </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Policy Number
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>10101234
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>NA

    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Nominee Names</th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>
   <div style={{marginTop:'-10px'}}>
   <span className='btn' >
   <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setModalShow(true)} color="rgb(43, 77, 129)" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
 <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
 <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
   </span>
   <span className='ml-2 btn'>
   <svg xmlns="http://www.w3.org/2000/svg" color="rgb(43, 77, 129)" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
   <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
 </svg>
   </span>
   </div>
    </th>
   
    </tr>
    <tr style={{backgroundColor:'rgb(232, 236, 243)',width:'100%'}}>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Life
    <br></br>Insurance
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>HDFC
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Policy Number
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>62622282

    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Policy


    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>ABC, XYZ 
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'500',fontSize:'17px',color:'black',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>
    <div style={{marginTop:'-10px'}}>
    <span className='btn'>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setModalShow(true)} color="rgb(43, 77, 129)" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
    </span>
    <span className='ml-2 btn'>
    <svg xmlns="http://www.w3.org/2000/svg" color="rgb(43, 77, 129)" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
  </svg>
    </span>
    </div>
    </th>
   
    </tr>
    <tr style={{backgroundColor:'rgb(176, 193, 219)',width:'100%'}}>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Term <br></br>Insurance
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Bajaj Allianz </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Policy Number
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>10101234

    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>NA

    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Nominee Names</th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'500',fontSize:'17px',color:'black',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>
    <div style={{marginTop:'-10px'}}>    <span className='btn'>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setModalShow(true)} color="rgb(43, 77, 129)" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
    </span>
    <span className='ml-2 btn'>
    <svg xmlns="http://www.w3.org/2000/svg" color="rgb(43, 77, 129)" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
  </svg>
    </span>
    </div>

    </th>
   
    </tr>
    <tr style={{backgroundColor:'rgb(232, 236, 243)',width:'100%'}}>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Life
    <br></br>Insurance
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Bajaj Allianz

    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Policy Number
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>10101234

    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'14%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Policy


    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'normal',fontSize:'18px',fontFamily:'Calibri',color:'black',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>Nominee Names
    </th>
    <th scope="col" style={{textTransform: "capitalize",fontWeight:'500',fontSize:'17px',color:'black',width:'15%',borderRight:'2px solid white',textAlign:'center',lineHeight:"15px"}}>
    <div style={{marginTop:'-10px'}}>
    <span className='btn'>
    <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setModalShow(true)} color="rgb(43, 77, 129)" width="30" height="30" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>
    </span>
    <span  className='ml-2 btn'>
    <svg xmlns="http://www.w3.org/2000/svg" color="rgb(43, 77, 129)" width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
  </svg>
    </span>
    </div>
    </th>
   
    </tr>
    
  </tbody>
</table>
</div>
<div className='container mt-5' >
<div style={{float:'left'}}>
<Link to={'/'}>
<p style={{color:'rgb(82, 114, 161)', fontSize:'20px', fontWeight:'500'}}>
<span>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
</svg>
</span>
<span className='ml-3'>
BACK
</span>
</p>
</Link>
</div>

</div>
    </div>
    </>
  )
}

export default AssetDetails