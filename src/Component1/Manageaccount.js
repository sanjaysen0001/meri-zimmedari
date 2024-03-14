import React from 'react'
import { Link } from 'react-router-dom'
import Mynavbar from './Mynavbar'

const Manageaccount = () => {
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
    <span> Manage Account</span>
    </p>
    </div>
    <div className='container'>
   
    <div className='mt-5'>
    <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
    <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'28px',textAlign:'center',fontFamily:'Calibri',marginLeft:'15px',width:'13.5rem'}} for="exampleInputPassword1" class="form-label">Reset Password
 
    
    </legend>
       <div className='row m-2'>
       <div className='col-md-4  col-xl-4 xol-lg-4'>
       <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',fontFamily:'Calibri',marginLeft:'15px',width:'7rem',paddingLeft:'5px'}} for="exampleInputPassword1" class="form-label">Old Password 
     
     </legend>
         <input type="tel" style={{border:'none',width:'95%', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
     </fieldset>
       </div>
       <div className='col-md-4  col-xl-4 xol-lg-4'>
       <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',fontFamily:'Calibri',marginLeft:'15px',width:'7rem',paddingLeft:'5px'}} for="exampleInputPassword1" class="form-label">New Password 
     
     </legend>
         <input type="tel" style={{border:'none',width:'95%', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
     </fieldset>
       </div>
       <div className='col-md-4  col-xl-4 xol-lg-4'>
       <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',fontFamily:'Calibri',marginLeft:'15px',width:'9rem',paddingLeft:'5px'}} for="exampleInputPassword1" class="form-label">Confirm Password 
     
     </legend>
         <input type="tel" style={{border:'none',width:'95%', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
     </fieldset>
       </div>
       </div>
       <div className='row mt-4 ' style={{marginLeft:'1rem',marginRight:'1rem'}}>
       <div className='col-md-4 col-xl-4 col-lg-4'></div>
       <div className='col-md-4 col-xl-4 col-lg-4' style={{justifyContent:'center',display:'flex'}}>
       <button style={{width:'80%',fontSize:'24px',color:'white',backgroundColor:'rgb(82, 114, 161)',border:'1px solid rgb(82, 114, 161)',height:'3rem',borderTopLeftRadius:'80px',borderTopRightRadius:'80px'}}>
       Save Password
       </button>
       </div>
       <div className='col-md-4 col-xl-4 col-lg-4'></div>
       </div>
        </fieldset>
    </div>
    <div className='mt-5'>
    <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
    <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'28px',textAlign:'center',fontFamily:'Calibri',marginLeft:'15px',width:'12.5rem'}} for="exampleInputPassword1" class="form-label"> Delete Account
 
    
    </legend>
    <div style={{marginLeft:'2rem',marginRight:'2rem'}}>
    <p style={{fontSize:'20px'}}>
    Deleting the account will result in the permanent removal of all stored information from the portal, with no possibility of recovery. Additionally, any subscription fee paid by the user will not be refunded, and the Meri Zimmedari will not be liable to offer any services to the user or their nominee thereafter.

    </p>
    </div>
      
       <div className='row mt-2 ' style={{marginLeft:'1rem',marginRight:'1rem'}}>
       <div className='col-md-4 col-xl-4 col-lg-4'></div>
       <div className='col-md-4 col-xl-4 col-lg-4' style={{justifyContent:'center',display:'flex'}}>
       <button style={{width:'80%',fontSize:'24px',color:'white',backgroundColor:'rgb(82, 114, 161)',border:'1px solid rgb(82, 114, 161)',height:'3rem',borderTopLeftRadius:'80px',borderTopRightRadius:'80px'}}>
       Delete Account

       </button>
       </div>
       <div className='col-md-4 col-xl-4 col-lg-4'></div>
       </div>
        </fieldset>
    </div>
   
   
    <div className='container mt-2' >
    <div style={{float:'left'}}>
    <Link to={'/dashboard'} style={{textDecoration:'none'}}>
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

export default Manageaccount