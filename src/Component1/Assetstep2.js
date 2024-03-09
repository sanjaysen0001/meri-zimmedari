import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";
import { Table } from "reactstrap";
import { Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Mynavbar from "./Mynavbar";

const Assetstep2 = () => {
  const [nomineeName, setNomineeName] = useState("");
  const [relationNominee, setRelationNominee] = useState("");
  const [percentageOfShare, setPercentageOfShare] = useState("");
  const [nomineePhone, setNomineePhone] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Mynavbar />
      <div>
        <div style={{ backgroundColor: "rgb(182, 205, 236)" }}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 ">
                <div style={{ padding: "20px" }}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="rgb(197, 128, 123)"
                          width="40"
                          height="40"
                          fill="currentColor"
                          class="bi bi-file-earmark-text"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
                          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
                        </svg>
                      </span>
                    </div>
                    <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-8">
                      <span>
                        <span style={{ color: "black" }}>Setp 1</span>
                        <span
                          style={{
                            backgroundColor: "rgb(152, 202, 152)",
                            color: " green",
                            fontSize: "14px",
                            marginLeft: "5px",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            borderRadius: "5px",
                          }}
                        >
                          COMPLETE
                        </span>
                        <br></br>
                        <span style={{ color: "black" }}>
                          Enter Asset Details
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 ">
                <div style={{ padding: "20px" }}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="rgb(240, 117, 108)"
                          width="40"
                          height="40"
                          fill="currentColor"
                          class="bi bi-person-check"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                          <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                        </svg>
                      </span>
                    </div>
                    <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-8">
                      <span>
                        <span style={{ color: "black" }}>STEP 2</span>
                        <span
                          style={{
                            backgroundColor: "rgb(248, 237, 237)",
                            color: " rgb(197, 128, 123)",
                            fontSize: "14px",
                            marginLeft: "5px",
                            paddingLeft: "8px",
                            paddingRight: "8px",
                            borderRadius: "5px",
                          }}
                        >
                          IN PROCESS
                        </span>

                        <br></br>
                        <span style={{ color: "black" }}>
                          Enter Nominee details
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-xl-4 col-lg-4 col-sm-4 ">
                <div style={{ padding: "20px" }}>
                  <div className="row">
                    <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-4">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          color="#842f0b"
                          width="40"
                          height="40"
                          fill="currentColor"
                          class="bi bi-floppy-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z" />
                          <path d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z" />
                        </svg>
                      </span>
                    </div>
                    <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-8">
                      <span>
                        <span style={{ color: "black" }}>STEP 3</span>

                        <br></br>
                        <span style={{ color: "black" }}>
                          Confirm details & Save
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*   <div className='container mt-3'>
  <div className='row'>
  <div >
  <span style={{color:'rgb(82, 114, 161)', fontSize:'18px'}}>Hey, don’t worry, Just need to add once only…!!!
  </span><br></br>
  <span style={{color:'rgb(82, 114, 161)', fontSize:'18px'}}>Enter the details of nominee as mentioned in original documents of asset (XXXXXXXXXXXXXXXXX) 

  </span>
  </div>
  </div>
  </div>
  */}
        {/*
  <div className='container mt-5'>
  <div >
  
</div>

  <div >
  
 


      <Table responsive>
      <thead>
        <tr style={{backgroundColor:"rgb(182, 204, 230)"}}>
          <th className='text-center'  style={{ textTransform: "capitalize",color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Calibri",borderRight:'2px solid white'}}>
         
          Nominee Name <span style={{color:'red'}}>*</span>
         
          </th>
          <th className='text-center' style={{textTransform: "capitalize",color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Calibri",lineHeight:'20px',borderRight:'2px solid white'}}>
          <div className='d-flex justify-content-center'>
          Relation with Nominee<span style={{color:'red'}}>*</span>
          </div>
         </th>
          <th className='text-center'  style={{textTransform: "capitalize",color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Calibri",lineHeight:'20px',borderRight:'2px solid white'}}>Percentage <br></br> of share  <span style={{color:'red'}}>*</span></th>
          
          <th className='text-center'  style={{textTransform: "capitalize",color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Calibri",borderRight:'2px solid white'}}>Nominee Phone No.   <span style={{color:'red'}}>*</span></th>
          <th className='text-center'  style={{textTransform: "capitalize",color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Calibri",borderRight:'2px solid white'}}>Nominee e-mail ID </th>
          <th className='text-center'  style={{textTransform: "capitalize",color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Calibri"}}>Action
          </th>
         
        </tr>
      </thead>
      

      <tbody>
        
        <tr>
        <th scope="row" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman"}}> <div>
        <input type='text' style={{width:'100%',height:'2.5rem',borderRadius:'5px', border:'1px solid rgb(114, 158, 216)'}} />
        
        </div></th>
        <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman"}}>
        <div>
        <Form.Select aria-label="Default select example" style={{width:'100%',height:'2.5rem',borderRadius:'5px', border:'1px solid rgb(114, 158, 216)'}}>
        <option></option>
        <option value="1">Father</option>
        <option value="2">Mother</option>
        <option value="3">Wife</option>
        <option value="4">Brother</option>
        <option value="5">Son</option>
      </Form.Select>
        </div>
        </td>
        <th scope="row" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman"}}>
        <div style={{height:'2.5rem',borderRadius:'5px', border:'1px solid rgb(114, 158, 216)',padding:'5px'}}>
        <span><input type='text' placeholder='XXXXX' style={{border:'none',width:"70%"}} />
        </span>
        <span>%</span>
        </div>
        </th>
        <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman"}}>
       <div >
       <span >
       <Form.Select aria-label="Default select example" style={{width:'25%',height:'2.5rem',borderRadius:'5px', border:'1px solid rgb(114, 158, 216)'}}>
       <option>+91</option>
       <option value="1">+21</option>
       <option value="2">+1</option>
       <option value="3">+93</option>
     </Form.Select>
       </span>
       <span>
       <input type='text' placeholder='XXXXX' style={{width:'75%',height:'2.5rem',borderRadius:'5px', border:'1px solid rgb(114, 158, 216)',padding:'5px'}} />
       </span><br></br>
       <span style={{}}>
       <button className='btn btn-primary'  style={{fontSize:'12px',width:'100%',height:'2.5rem',borderRadius:'5px', border:'1px solid rgb(201, 198, 198)',marginTop:'-5px'}}>
       SEND OTP
       </button>
       </span>
       </div>
        </td>
        <th scope="row" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman"}}>
        <div>
        <span >
        <input type='text' placeholder='XXX@ymail.com' style={{width:'100%',height:'2.5rem',borderRadius:'5px', border:'1px solid rgb(114, 158, 216)',padding:'5px'}} />
        </span><br></br>
        <span className='mt-2'>
        <button className='btn btn-primary'  style={{fontSize:'12px',width:'100%',height:'2.5rem',borderRadius:'5px', border:'1px solid rgb(201, 198, 198)',marginTop:'-5px'}}>
        SEND OTP
        </button>
        </span>
        </div>
        </th>
        
        <td className="text-center" style={{color:'rgb(47, 80, 119)',fontSize:'18px',fontFamily: "Times New Roman",width:"15%"}}>
        <div style={{border:'1px solid rgb(114, 158, 216)',padding:'5px',borderRadius:'10px'}}>
        <span style={{marginLeft:'5px'}}>
        <Link to={'/add-asset/policy'}>
        <svg xmlns="http://www.w3.org/2000/svg" color='black' width="30" height="30" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
</svg>
</Link>
        </span>
        </div>
        </td>
      </tr>
      </tbody>


    </Table>
    </div>
  </div>
 */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4"></div>
            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4">
              <div
                style={{
                  borderBottomLeftRadius: " 50px",
                  borderBottomRightRadius: " 50px",
                  backgroundColor: "rgb(92, 139, 201)",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "white",
                    fontSize: "20px",
                    fontFamily: "Calibri",
                  }}
                >
                  Auto-fill from pre-saved nominees
                </span>{" "}
                <br></br>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="white"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-caret-down-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                  </svg>
                </span>
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}></div>
            </div>
            <div className="col-md-4 col-lg-4 col-xl-4 col-sm-4"></div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row" style={{ margin: "1rem" }}>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
              <div>
                <div className="mt-4">
                  <div className="mb-3">
                    <form action="#" method="post">
                      <fieldset
                        style={{
                          color: "rgb(82, 114, 161)",
                          fontSize: "20px",
                          fontFamily: "Calibri",
                          border: "1px solid rgb(114, 158, 216)",
                          borderRadius: "10px",
                        }}
                      >
                        <legend
                          style={{
                            color: "rgb(82, 114, 161)",
                            fontSize: "20px",
                            fontFamily: "Calibri",
                            marginLeft: "15px",
                            width: "11rem",
                          }}
                          for="exampleInputPassword1"
                          class="form-label"
                        >
                          Nominee Name <span style={{ color: "red" }}>*</span>
                        </legend>
                        <input
                          type="text"
                          placeholder="XXXXXXXXXXXX"
                          style={{
                            width: "100%",
                            border: "none",
                            paddingLeft: "15px",
                            paddingBottom: "10px",
                            marginBottom: "5px",
                          }}
                          id="dob"
                          name="dob"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
              <div>
                <div className="mt-4">
                  <div className="mb-3">
                    <form action="#" method="post">
                      <fieldset
                        style={{
                          color: "rgb(82, 114, 161)",
                          fontSize: "20px",
                          fontFamily: "Calibri",
                          border: "1px solid rgb(114, 158, 216)",
                          borderRadius: "10px",
                          height: "5.3rem",
                        }}
                      >
                        <legend
                          style={{
                            color: "rgb(82, 114, 161)",
                            fontSize: "20px",
                            fontFamily: "Calibri",
                            marginLeft: "15px",
                            width: "14rem",
                          }}
                          for="exampleInputPassword1"
                          class="form-label"
                        >
                          Relation with Nominee{" "}
                          <span style={{ color: "red" }}>*</span>
                        </legend>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          style={{
                            outline: "none",
                            width: "100%",
                            float: "right",
                            border: "none",
                            paddingLeft: "15px",
                            paddingBottom: "10px",
                            marginBottom: "5px",
                          }}
                        >
                          <option
                            selected
                            style={{ float: "left", border: "none" }}
                          ></option>
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
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
              <div>
                <div className="mt-4">
                  <div className="mb-3">
                    <form action="#" method="post">
                      <fieldset
                        style={{
                          color: "rgb(82, 114, 161)",
                          fontSize: "20px",
                          fontFamily: "Calibri",
                          border: "1px solid rgb(114, 158, 216)",
                          borderRadius: "10px",
                        }}
                      >
                        <legend
                          style={{
                            color: "rgb(82, 114, 161)",
                            fontSize: "20px",
                            fontFamily: "Calibri",
                            marginLeft: "15px",
                            width: "13rem",
                          }}
                          for="exampleInputPassword1"
                          class="form-label"
                        >
                          Percentage of Share{" "}
                          <span style={{ color: "red" }}>*</span>
                        </legend>
                        <input
                          type="text"
                          placeholder="XXXXXXXXXXXX"
                          style={{
                            width: "100%",
                            border: "none",
                            paddingLeft: "15px",
                            paddingBottom: "10px",
                            marginBottom: "5px",
                          }}
                          id="dob"
                          name="dob"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2"></div>
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
              <div>
                <div className="mt-4">
                  <div className="mb-3">
                    <form action="#" method="post">
                      <fieldset
                        style={{
                          color: "rgb(82, 114, 161)",
                          fontSize: "20px",
                          fontFamily: "Calibri",
                          border: "1px solid rgb(114, 158, 216)",
                          borderRadius: "10px",
                          height: "5.3rem",
                        }}
                      >
                        <legend
                          style={{
                            color: "rgb(82, 114, 161)",
                            fontSize: "20px",
                            fontFamily: "Calibri",
                            marginLeft: "15px",
                            width: "15rem",
                          }}
                          for="exampleInputPassword1"
                          class="form-label"
                        >
                          Nominee Phone Number
                          <span style={{ color: "red" }}>*</span>
                        </legend>
                        <div className="row">
                          <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3">
                            <span>
                              <button
                                style={{
                                  outline: "none",
                                  marginLeft: "2px",
                                  width: "115%",
                                  border: "1px solid rgb(114, 158, 216)",
                                  textAlign: "center",
                                  height: "3rem",
                                  marginTop: "-10px",
                                  borderRadius: "10px",
                                  fontSize: "18px",
                                }}
                              >
                                +91
                              </button>
                            </span>
                          </div>
                          <div className="col-md-8 col-sm-8 col-lg-8 col-xl-8 col-6">
                            <input
                              type="tel"
                              placeholder="965XX50XX0"
                              style={{
                                width: "90%",
                                outline: "none",
                                border: "none",
                                paddingLeft: "15px",
                                paddingBottom: "10px",
                                marginBottom: "5px",
                              }}
                              id="dob"
                              name="dob"
                              onChange={e => {
                                console.log(e.target.value);
                              }}
                            />
                          </div>
                          <div
                            className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3"
                            style={{ marginLeft: "-10px" }}
                          >
                            <span>
                              <button
                                className="btn"
                                style={{
                                  fontSize: "13px",
                                  width: "115%",
                                  borderRadius: "10px",
                                  backgroundColor: "rgb(32, 119, 190)",
                                  color: "white",
                                  border: "1px solid rgb(114, 158, 216)",
                                  lineHeight: "15px",
                                  height: "3rem",
                                  marginTop: "-10px",
                                }}
                              >
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
            <div className="col-md-4 col-sm-4 col-lg-4 col-xl-4">
              <div>
                <div className="mt-4">
                  <div className="mb-3">
                    <form action="#" method="post">
                      <fieldset
                        style={{
                          color: "rgb(82, 114, 161)",
                          fontSize: "20px",
                          fontFamily: "Calibri",
                          border: "1px solid rgb(114, 158, 216)",
                          borderRadius: "10px",
                          height: "5.3rem",
                        }}
                      >
                        <legend
                          style={{
                            color: "rgb(82, 114, 161)",
                            fontSize: "20px",
                            fontFamily: "Calibri",
                            marginLeft: "15px",
                            width: "12rem",
                          }}
                          for="exampleInputPassword1"
                          class="form-label"
                        >
                          Nominee Email ID
                        </legend>
                        <div className="row">
                          <div className="col-md-10 col-sm-10 col-lg-10 col-xl-10 col-9">
                            <input
                              type="email"
                              placeholder="kauxxxxxxxxxxxnghxxx@gmail.com"
                              style={{
                                width: "90%",
                                outline: "none",
                                border: "none",
                                paddingLeft: "15px",
                                paddingBottom: "10px",
                                marginBottom: "5px",
                              }}
                              id="email"
                              name="email"
                            />
                          </div>
                          <div
                            className="col-md-2 col-sm-2 col-lg-2 col-xl-2 col-3"
                            style={{ marginLeft: "-10px" }}
                          >
                            <span>
                              <button
                                className="btn "
                                style={{
                                  fontSize: "13px",
                                  backgroundColor: "rgb(32, 119, 190)",
                                  color: "white",
                                  width: "115%",
                                  borderRadius: "10px",
                                  border: "1px solid rgb(114, 158, 216)",
                                  lineHeight: "15px",
                                  height: "3rem",
                                  marginTop: "-10px",
                                }}
                              >
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
            <div className="col-md-2 col-sm-2 col-lg-2 col-xl-2"></div>
          </div>
        </div>
        <div className="container mt-5" style={{ paddingBottom: "60px" }}>
          <div style={{ float: "left" }}>
            <Link to={"/add-asset/policy"}>
              <p
                style={{
                  color: "rgb(82, 114, 161)",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                  </svg>
                </span>
                <span className="ml-3">BACK</span>
              </p>
            </Link>
          </div>
          <div style={{ float: "right" }}>
            <button
              className="ml-2 btn"
              style={{
                border: "none",
                backgroundColor: "rgb(182, 205, 236)",
                width: "7rem",
                borderRadius: "5px",
                lineHeight: "15px",
              }}
            >
              Add More Nominee
            </button>
            <Link to={"/add-asset/step3"}>
              <button
                className="ml-2"
                style={{
                  border: "none",
                  backgroundColor: "rgb(182, 205, 236)",
                  padding: "8px",
                  width: "7rem",
                  borderRadius: "5px",
                }}
              >
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Assetstep2;
