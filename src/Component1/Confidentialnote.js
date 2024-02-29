import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import Mynavbar from './Mynavbar'

const Confidentialnote = () => {
  return (
    <>
    <Mynavbar/>
    <div >
    <p  style={{fontSize:'22px',color:'rgb(43, 77, 129)' ,fontWeight:'400', backgroundImage: "linear-gradient(to right, rgb(194, 215, 233) , rgb(229, 234, 238))"}}>
    <span className='ml-3'>My Account </span>
    <span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
 </svg>
    </span>
    <span> Confidential Note</span>
    </p>
    </div>
    <div className='container-fluid'>
 
    
    <div style={{ overflowX: 'auto' }}>
    <div className='container-fluid'>
 <div className='row' style={{margin:'1rem'}}>
 <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'11rem'}} for="exampleInputPassword1" class="form-label">Nominee Name  <span style={{color:'red'}}>*</span>
   
   </legend>
       <input type="text" placeholder='XXXXXXXXXXXX' style={{width:'100%',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
   </fieldset>
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>
 <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px',height:'5.3rem'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'14rem'}} for="exampleInputPassword1" class="form-label">Relation with Nominee   <span style={{color:'red'}}>*</span>
   
   </legend>
   <select class="form-select" aria-label="Default select example" style={{outline:'none',width:'100%',float:'right',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}}>
  <option selected style={{float:'left',border:'none'}}></option>
  <option value="1">Father</option>
  <option value="2">Wife</option>
  <option value="3">Son</option>
</select>
     
   </fieldset>
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>
 <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'13rem'}} for="exampleInputPassword1" class="form-label">Percentage of Share   <span style={{color:'red'}}>*</span>
   
   </legend>
       <input type="text" placeholder='XXXXXXXXXXXX' style={{width:'100%',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
   </fieldset>
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>
 <div className='col-md-2 col-sm-2 col-lg-2 col-xl-2'></div>
 <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px',height:'5.3rem'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'15rem'}} for="exampleInputPassword1" class="form-label">Nominee Phone Number <span style={{color:'red'}}>*</span>
   
   </legend>
   <div className='row'>
   <div className='col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3'>
   <span>
      <button   style={{outline:'none',marginLeft:'2px',width:'115%',border:'1px solid rgb(114, 158, 216)',textAlign:'center',height:'3rem',marginTop:'-10px',borderRadius:'10px',fontSize:'18px'}}>
      
      +91
      
    </button>
      </span>
   </div>
   <div className='col-md-8 col-sm-8 col-lg-8 col-xl-8 col-6'>
   <input type="tel" placeholder='965XX50XX0' style={{width:'90%',outline:'none',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
   
   </div>
   <div className='col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3'  style={{marginLeft:'-10px'}}>
   <span >
   <button className='btn'  style={{fontSize:'13px',width:'115%',borderRadius:'10px',backgroundColor:'rgb(32, 119, 190)',color:'white', border:'1px solid rgb(114, 158, 216)',lineHeight:'15px',height:'3rem',marginTop:'-10px'}}>
   SEND OTP
   </button>
   
   </span>
  
   </div>
   </div>
      
       </fieldset>
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>
 <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4' >
 <div >
 <div className='mt-4'>
 <div className='mb-3'>
 <form action="#" method="post">
   <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px',height:'5.3rem'}}>
   <legend style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri',marginLeft:'15px',width:'12rem'}} for="exampleInputPassword1" class="form-label">Nominee Email ID

   
   </legend>
   <div className='row'>
   
   <div className='col-md-10 col-sm-10 col-lg-10 col-xl-10 col-9'>
   <input type="email" placeholder='kauxxxxxxxxxxxnghxxx@gmail.com' style={{width:'90%',outline:'none',border:'none',paddingLeft:'15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
   
   </div>
   <div className='col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3'  style={{marginLeft:'-10px'}}>
   <span >
   <button className='btn '  style={{fontSize:'13px',backgroundColor:'rgb(32, 119, 190)',color:'white',width:'115%',borderRadius:'10px', border:'1px solid rgb(114, 158, 216)',lineHeight:'15px',height:'3rem',marginTop:'-10px'}}>
   SEND OTP
   </button>
   
   </span>
  
   </div>
   </div>
      
       </fieldset>
   
   
   
</form>
 </div> 
   </div>
 </div>
 </div>
 <div className='col-md-2 col-sm-2 col-lg-2 col-xl-2'></div>

 </div>
 
 </div>
</div>
<div className='container mt-2' >
<div style={{float:'left'}}>
<Link to={'/confidentialnoteeditor'}>
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
<div style={{float:'right', bottom:'0px'}}>
<Link to={'/confidentialnote'}>
<span className='btn'>
<svg xmlns="http://www.w3.org/2000/svg" color='rgb(43, 77, 129)' width="50" height="50" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>
</span>
      </Link>
</div>
</div>

    </div>
    </>
  )
}

export default Confidentialnote