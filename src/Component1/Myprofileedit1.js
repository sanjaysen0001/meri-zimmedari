import React from 'react'
import profile from '../image/myprofilepic.png'
import { Link } from 'react-router-dom'
import Mynavbar from './Mynavbar'

const Myprofileedit1 = () => {
  return (
   <>
   <Mynavbar/>
   <div >
    <p style={{fontSize:'22px',color:'rgb(43, 77, 129)' ,fontWeight:'400', backgroundImage: "linear-gradient(to right, rgb(194, 215, 233) , rgb(229, 234, 238))"}}>
    <span className="ml-3">My Profile</span>
    <span>     
    </span>        
    </p>
    </div>
   <div className='container'>

   <div className='row mb-5 m-2'>
   <div className='col-md-4 col-sm-4 col-lg-4 col-xl-4'>
   <div style={{justifyContent:'center',display:'flex'}}>
   <img src={profile} alt='profile'/>
   </div>
   <div>
   <Link style={{textDecoration:'none'}}>
   <p style={{color:'rgb(82, 114, 161)', fontSize:'20px', fontWeight:'400',textAlign:'center',}}><span style={{borderBottom:'1px solid rgb(82, 114, 161)'}}> Update</span></p>
   </Link>
   </div>
   </div>
   <div className='col-md-8 col-sm-8 col-lg-8 col-xl-8 mt-4'>
   <div>
   <form>
   <div className="form-row classformargininmyprofilepage">
     <div className="form-group col-md-4">
     <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',paddingLeft:'5px',fontFamily:'Calibri',marginLeft:'15px',width:'5.5rem'}} for="exampleInputPassword1" class="form-label">First Name 
     
     </legend>
         <input type="text" style={{border:'none',width:'95%', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
     </fieldset>
      
       </div>
     <div className="form-group col-md-4">

     <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',paddingLeft:'5px',fontFamily:'Calibri',marginLeft:'15px',width:'6.5rem'}} for="exampleInputPassword1" class="form-label">Middle Name 
     
     </legend>
         <input type="text" style={{border:'none',width:'95%', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
     </fieldset>
     
       </div>
     <div className="form-group col-md-4">
     <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',paddingLeft:'5px',fontFamily:'Calibri',marginLeft:'15px',width:'5.5rem'}} for="exampleInputPassword1" class="form-label">Last Name 
     
     </legend>
         <input type="text" style={{border:'none',width:'95%', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
     </fieldset>

       </div>
   </div>
   <div className="form-row">
     <div className="form-group col-md-5 col-sm-5 col-xl-5 col-lg-5 col-10 classformargininmyprofilepage">
    
       
       <div>
       <span>
       <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
       <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',paddingLeft:'5px',fontFamily:'Calibri',marginLeft:'15px',width:'auto'}} for="exampleInputPassword1" class="form-label">Phone Number 
     
     </legend>
           <input type="tel" style={{border:'none',width:'95%', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
       </fieldset>
      
       </span>
       
       </div>
       
       
       </div>
       <div className="form-group col-md-1 col-sm-1 col-xl-1 col-lg-1 col-2 classformargininmyprofilepage" >

       <button style={{border:'1px solid  rgb(201, 198, 198)',marginTop:'10px',fontSize:'14px',color:'white',height:'3.4rem',borderRadius:'10px',backgroundColor:'rgb(20, 130, 233)'}}>SEND OTP</button>
       </div>
       <div className="form-group col-md-5 col-sm-5 col-xl-5 col-lg-5 col-10 classformargininmyprofilepage">
    
       
       <div>
       <span>
       <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
       <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',fontFamily:'Calibri',marginLeft:'15px',width:'7rem',paddingLeft:'5px'}} for="exampleInputPassword1" class="form-label">Email Address 
     
     </legend>
           <input type="tel" style={{border:'none',width:'95%', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
       </fieldset>
      
       </span>
       
       </div>
       
       
       </div>
       <div className="form-group col-md-1 col-sm-1 col-xl-1 col-lg-1 col-2 classformargininmyprofilepage" >

       <button style={{border:'1px solid  rgb(201, 198, 198)',marginTop:'10px',fontSize:'14px',color:'white',height:'3.5rem',borderRadius:'10px',backgroundColor:'rgb(20, 130, 233)'}}>SEND OTP</button>
       </div>
     <div className="form-group col-md-6 classformargininmyprofilepage">
     <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',paddingLeft:'5px',fontFamily:'Calibri',marginLeft:'15px',width:'6.5rem'}} for="exampleInputPassword1" class="form-label">Date of Birth 
    
    </legend>
         <input type="date" style={{border:'none',width:'95%',backgroundColor:'white', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}} id="dob" name="dob"/>
     </fieldset>
     </div>
     <div className="form-group col-md-6 classformargininmyprofilepage">
     <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',paddingLeft:'5px',fontFamily:'Calibri',marginLeft:'15px',width:'4.5rem'}} for="exampleInputPassword1" class="form-label">Gender 
    
    </legend>
      
    <select class="form-select" aria-label="Default select example" style={{border:'none',color:'#C4A484',backgroundColor:'white', outline: "none",paddingLeft:'15px',marginTop:'-15px',paddingBottom:'10px',marginBottom:'5px'}}>
  <option selected>Select Gender</option>
  <option value="1">Male</option>
  <option value="2">Female</option>
  <option value="3">Other</option>
</select>
    </fieldset>
    
     </div>
   </div>
  
 </form>
   </div>
   </div>
   </div>
   

   <div className='container mt-5' style={{paddingBottom:'60px'}}>
   <div style={{float:'left'}}>
   <Link to={'/myprofile'} style={{textDecoration:'none'}}>
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
   <div style={{float:'right'}}>
   <Link to={'/myprofile/edit'}>
   <span className="icon-container">
   <svg xmlns="http://www.w3.org/2000/svg" color='rgb(43, 77, 129)' width="40" height="40" fill="currentColor" class="bi bi-floppy2-fill hoverable-image" viewBox="0 0 16 16">
  <path d="M12 2h-2v3h2z"/>
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2.914a1.5 1.5 0 0 0-.44-1.06L14.147.439A1.5 1.5 0 0 0 13.086 0zM4 6a1 1 0 0 1-1-1V1h10v4a1 1 0 0 1-1 1zM3 9h10a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1"/>
</svg>
<span className="icon-name" style={{marginLeft:'1.5%',marginTop:'2px'}}>Save</span>
 </span>
   </Link>
   </div>
   </div>
   </div>
   </>
  )
}

export default Myprofileedit1