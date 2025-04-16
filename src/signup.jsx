import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Login from './login';
import Recipe from './recipe';

import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";


import waves from "./assets/wavess.png"

export default function Signup({ sign, setsign, modalShow, setModalShow}){

  // , pass, chan, setGender


  const close = ()=>{
    setModalShow(!modalShow)
    setsign(!sign)
  }














const setsig = (e) =>{
  e.preventDefault();
  fetch('https://67d7ed159d5e3a10152c9af5.mockapi.io/userdata/detail', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(tabledata)
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(task => {
    // do something with the new task
    console.log(task,"post")
    setsign(!sign)
    setModalShow(!modalShow)
  }).catch(error => {
    // handle error
  })

}




//password


const[open, setOpen] = useState(true)



const [tabledata, settabledata] = useState(null)

// console.log(tabledata)

  return(
    <>
      <Modal show={sign}  animation={true} centered className='signup_box'>
      <button onClick={()=>{setsign(!sign)}} className='signup_btn'>X</button>
        <div className='signup_img'>
          <img src={waves} alt="" className='wavesss'/>
          <p className='p1'>Start for free</p>
          <p className='p2'>Create a new account</p>
          <p className='p3'>Already Have an Account <span onClick={() =>close()}>Login ?</span></p>
          <form action="" className='signup_form'>
         <div className='signup_inp'>
          <div style={{position:"relative"}}>
            <label htmlFor="" className='label1'>First Name</label>
            <input type="text" placeholder='Enter First Name' onChange={(e)=>settabledata({...tabledata , FirstName : e.target.value})}/>
          </div>
        <div style={{position:"relative"}}>
          <label htmlFor="" className='label2'>Last Name</label>
           <input type="text" placeholder='Enter Last Name' onChange={(e)=>settabledata({...tabledata , LastName : e.target.value})}/>
        </div>
         
         </div>
          <div style={{display:"flex",gap:"5px"}}>
            <label style={{marginRight:"10px"}}>Select Gender</label>
          <input type="radio" name='gender' value="male" onChange={(e)=>settabledata({...tabledata,Gender:e.target.value})} />
          <label htmlFor="">Male</label>
          <input type="radio" name='gender' value="female" onChange={(e)=>settabledata({...tabledata,Gender:e.target.value})} />
          <label htmlFor="">Female</label>
          </div>

          <div  style={{display:"flex",flexDirection:"column",position:"relative"}}>
            <label htmlFor=""  className='label3'>Email</label>
          <input type="email" placeholder='Enter Email' onChange={(e)=>settabledata({...tabledata , Email : e.target.value})}/>
          </div>

          <div style={{display:"flex",flexDirection:"column",position:"relative"}}>
          <label htmlFor=""  className='label3'>Password</label>
          <input type={open ? "text" : "password"} placeholder='Enter password' onChange={(e)=>settabledata({...tabledata , Password : e.target.value})}  className="pass"/>
      <div id="icon">
        {/* <i class="fa-solid fa-eye" onclick="sample('open')" id="eye"></i>
      <i class="fa-solid fa-eye-slash" onclick="sample('close')" id="eyeclose"></i> */}


{open ? ( <IoIosEye onClick={() => setOpen(false)} className="eye" /> ) : ( <IoIosEyeOff onClick={() => setOpen(true)} className="eyeclose" />)}


      </div>
          </div>
        
            {tabledata && (tabledata?.Email === "" && tabledata?.Password === "" ) ? <button class="button-86" role="button">Create Account</button> : <button class="button-86" role="button"  onClick={setsig}>Create Account</button>}
           


          </form>
        </div>
      </Modal>

     
      
    </>
  )
}