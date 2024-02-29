
import React, { useState } from 'react'
import imagelogo from '../image/logo.png'
import imageuser from '../image/logouserimage.png'
import { Link } from 'react-router-dom';
import "./Otpveri";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const Login = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  

  return (
  <>
  <Modal isOpen={modal} toggle={toggle} >
  <ModalHeader toggle={toggle}>
  
  </ModalHeader>
  <ModalBody style={{justifyContent:'center',display:'flex'}}>
  <div  style={{margin:"5rem"}}>
  <div className=' mt-2 '>
  <h2>
  Welcome to Meri Zimmedari
  </h2>
  <p>
  To sign in, please enter details
  </p>
   
  </div>
  <div class="" style={{float:"left"}}>
  <form>
  

  <div className="mt-3">
   <Link to={'/login/password'}>
  <button  type="button" onClick={toggle} class="btn " style={{width:"18rem", backgroundColor:"#4478c7" , color:"white"}}> Log In With Password </button>
  </Link>
  </div>
  <div className="mt-3">
  <Link to={'/login/otp'}>
  <button  type="button" onClick={toggle} class="btn " style={{width:"18rem", backgroundColor:"#4478c7" , color:"white"}}> Log In With OTP </button>
  </Link>
  </div>
  <div className="mt-3">
   
  <button  type="button" onClick={toggle} class="btn " style={{width:"18rem", backgroundColor:"#4478c7" , color:"white"}}> Log In With Face Recognition </button>
   
  </div>
  
  
  </form>
 

  </div>
</div>
  </ModalBody>
  
</Modal>


  <div className='container-fluid ' style={{display: "inline-block"}}>
  <div class="header" style={{marginLeft:'-15px',boxShadow: "0 0 10px  #2374ee"}}>
         <div class="container-fluid">
            <div class="row d_flex" >
               <a href="https://merizimmedari.com/" target='_blank'>
                  <div class=" col-md-2 col-sm-9 ">
                      <a href="https://merizimmedari.com/" target='_blank'><img src={imagelogo} target='_blank' href="https://merizimmedari.com/" style={{width:'96px'}}  alt="#" /></a>
                          
                  </div>
               </a>
               <div class="col-md-10 col-sm-12 chgdfagdjagdagfagsf">
                  <nav class="navigation navbar navbar-expand-md navbar-dark ">
                     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                     <span class="navbar-toggler-icon"></span>
                     </button>
                     <div class="collapse navbar-collapse" id="navbarsExample04">
                        <ul class="navbar-nav mr-auto">
                          
                           <li class="nav-item ">
                              <a class="nav-link" href="https://merizimmedari.com/WhatWeDo.html">What We Do ?</a>
                           </li>
                           <li class="nav-item ">
                              <a class="nav-link" href="https://merizimmedari.com/HowWeDo.html">How It Works ?</a>
                           </li>
                           <li class="nav-item ">
                              <a class="nav-link" href="https://merizimmedari.com/FAQ.html">FAQ</a>
                           </li>
                          
                           <li class="nav-item ">
                              <a class="nav-link" href="https://merizimmedari.com/contact.html">Contact Us</a>
                           </li>
                           <li class="nav-item">
                              <a class="nav-link" href="https://user.merizimmedari.com/#/" target="_blank">Sign in</a>
                           </li>
                         
                        </ul>
                     </div>
                  </nav>
               </div>
               
            </div>
         </div>
      </div>
  
  <div className='row ' style={{paddingTop:'5rem'}}>
  <div className='col-md-4 col-sm-1 col-lg-4 col-xl-4'>
  <div>
  
  </div>
  </div>
  <div className='col-md-4 col-sm-10 col-lg-4 col-xl-4 ' >
  <div className='gdfhagfjhagjhfgagfjhaf'  style={{margin:'1rem',marginTop:'4rem',borderRadius:'20px',backgroundColor:"white",paddingBottom:'1rem' }}>
  
  <div  style={{backgroundColor:"rgb(194, 215, 233)",width:'100%',borderTopLeftRadius:'20px',borderTopRightRadius:'20px',paddingLeft:'2rem'}}>
  <div style={{fontSize:"20px",fontWeight:'600',}}>
  Sign-in to Meri Zimmedari
  </div>
 
   
  </div>
  <div  style={{margin:"2rem"}}>
  
  <div className="mt-3" >
  <form>
  <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', border: "1px solid rgb(114, 158, 216)",borderRadius:'10px',height:'4rem',width:'100%'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'16px',paddingLeft:'5px',fontFamily:'Calibri',marginLeft:'15px',width:'8rem'}} for="exampleInputPassword1" class="form-label">Mobile Number 
     
     </legend>
     <button id="country" name="country" style={{border:"none",backgroundColor:'white'}}>
     <option value="+91" style={{background:'transparent',fontSize:'16px'}}>IND (+91)</option>
   
    
   </button>
   <input className='shgdfjhasgdfas' style={{border:"none",outline: "none",width:"60%",fontSize:'17px',paddingTop:'8px' }} type="tel" id="mobile" name="mobile" pattern="[0-9]{10}"  required />

         </fieldset>
  

  <div className="mt-4">
   <Link to={"/login/otp"}>
  <button  type="button" class="btn " style={{width:"100%", backgroundColor:"#4478c7" , color:"white",height:'2.8rem'}}> Sign in with OTP </button>
  </Link>
  <Link to={'/login/password'}>
  <button  type="button" class="btn mt-3 mb-3" style={{width:"100%", color:"#4478c7",height:'2.8rem'}}> Sign in with Password </button>
  </Link>
  </div>
  <div>
  <fieldset  style={{color:'rgb(82, 114, 161)', fontSize:'20px',fontFamily:'Calibri', borderTop: "1px solid rgb(114, 158, 216)",borderRadius:'10px',width:'100%'}}>
     <legend style={{color:'rgb(82, 114, 161)',marginBottom:'-5px', fontSize:'20px',fontFamily:'Calibri',textAlign:"center",width:'4rem'}} for="exampleInputPassword1" class="form-label">or 
     
     </legend>
    
         </fieldset>
  </div>
  <div>
  <button  type="button" class="btn mt-4" style={{width:"100%", border:'1px solid black' , color:"rgb(82, 114, 161)",height:'2.8rem'}}> Sign in with face recognition </button>
  
  </div>
  
  </form>
 

  </div>
</div>
</div>
  <div >

 
  </div>
  </div>
  </div>
  </div>

 

  
  </>
  )
}

export default Login;







