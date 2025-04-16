import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Signup from './signup';

import { useEffect, useState } from 'react';


import waves from "./assets/wavess.png"

export default function Login(data){


  useEffect(()=>{
  let time = setTimeout(()=>{
    data.setModalShow(!data.modalShow)
  },5000)

  return ()=>clearInterval(time)
  },[])
  


const [sign , setsign] = useState(false)

 const signup = () =>{
  data.setModalShow(!data.modalShow)
  setsign(!sign)
 }

 


 const [pass, setPass] = useState(null)



 
 let count = 0;
 const passward = () => {

  fetch('https://67d7ed159d5e3a10152c9af5.mockapi.io/userdata/detail', {
    method: 'GET',
    headers: {'content-type':'application/json'},
  }).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
  }).then(tasks => {

    console.log(tasks)
  let isMatch = false
  for (let i = 0; i < tasks?.length; i++) {
    if (tasks[i].Email === pass?.email) {
      isMatch = true;
      if (tasks[i].Password === pass?.pass) {
        console.log(tasks[i]); 
        data.setGender(tasks[i])
        data.setReciperout(tasks[i])
        alert("Login Successful");
        data.setModalShow(!data.modalShow)
      } else {
        alert("Password Incorrect");
        isMatch = true;
      }
    }
    else{
      count++
    }
  }

  if(!isMatch){
    
    alert("Email and password not match, Please Sign in")
    data.setModalShow(!data.modalShow)
    setsign(!sign)
  }

  }).catch(error => {
    // handle error
  })

 }


  return(
    <>
      <Modal show={data.modalShow}  animation={true} centered className='login_main'>
      <button onClick={()=>data.setModalShow(!data.modalShow)} style={{position:"absolute",left:"-5px",top:"-20px",backgroundColor:"transparent",border:"none",color:"white",fontSize:"25px"}}>X</button>
      <img src={waves} alt="" className='wave'/>
        <div className='userinput'>
          <div>
            <label htmlFor="name">Email</label><br/>
            <input type="email" placeholder='Enter Your Email' onChange={(e)=>setPass({...pass, email:e.target.value})} />
          </div>
          <div>
          <label htmlFor="name">Password</label><br/>
          <input type='text' placeholder='Enter Password' onChange={(e)=>setPass({...pass, pass:e.target.value})}/><br/>
          <input type="checkbox" />
          <label htmlFor="check">Show Password</label>
          </div>
          <button onClick={()=>passward()}>Login</button>
          <div>
            <p>Don't Have an Account <span onClick={() => signup()}>SignUp ?</span></p>
          </div>
        </div>
      </Modal>

      <Signup sign = {sign} setsign = {setsign} modalShow={data.modalShow}  setModalShow = {data.setModalShow} pass={pass}/>
    </>
  )
}