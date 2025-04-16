import { FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Dropdown from 'react-bootstrap/Dropdown';
import { FaAngleDown } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import Login from "./login";

import logo from "./assets/logo.jpeg"
import logo2 from "./assets/logo2.png"
import man from "./assets/man.png";
import female from "./assets/woman.png"

import { Link, Links } from "react-router";

import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Signup from "./signup";

export default function Navbar(nav){

  let {setReciperout, reciperout} = nav


  const[gender, setGender] = useState("");
  const[genderimg, setGenderimg] = useState(true)
  useEffect(()=>{
    if(gender){
      if(gender.Gender === "male"){
        setGenderimg(true)
      }
      else{
        setGenderimg(false)
      }
    }
  },[gender])


  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const [menu, setMenu] = useState(false);
  
  window.addEventListener("scroll",function(){
    if(scrollY > 120){
      document.querySelector(".navbars").style = "background-color: rgba(0, 0, 0, 0.738);"
    }
    else{
      document.querySelector(".navbars").style = "background-color: transparent;"
    }
  })

  return(
    <>
    <section className="navbars">
      <div className="logo">
      <CiMenuFries className="menu_i" onClick={()=>setMenu(!menu)}/>
      <Offcanvas show={menu} onClick={()=>setMenu(!menu)}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>


        <img src={logo2} alt="" />
        <p><Link to="/">FLAVORO</Link></p>
      </div>

      <div className="nava">
        
      <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" class="show dropdown af" aria-expanded="false">
      Recipes<FaAngleDown />
      </Dropdown.Toggle>

      <Dropdown.Menu id="showw">
        <div className="showbox">
        <div className="showbox_content">
           <Link className="showbox_header">Cuisines</Link>
        <Dropdown.Item href="#/action-1" className="text-dark">India</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="text-dark">Chinese</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Asian</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Thai</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Japanese</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">American</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Mexican</Dropdown.Item>
        </div>

        <div className="showbox_content">
        <Link  className="showbox_header">Cuisines</Link>
        <Dropdown.Item href="#/action-1" className="text-dark">Italian</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="text-dark">French</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Spanish</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Continental</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Middle Eastern</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Greek</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Srilankan</Dropdown.Item>
        </div>

        <div className="showbox_content">
        <Link className="showbox_header">Course of Meal</Link>
        <Dropdown.Item href="#/action-1" className="text-dark">Salad</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="text-dark">Beverage</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Starter</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">MainCourse</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Dessert</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Accompaniment</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Snack</Dropdown.Item>
        </div>

        <div className="showbox_content">
        <Link className="showbox_header">Meal</Link>
        <Dropdown.Item href="#/action-1" className="text-dark">Breakfast</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="text-dark">Brunch</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Lanch</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Evening Snack</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Dinner</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">LateNight</Dropdown.Item>
        </div>


        </div>

        
      </Dropdown.Menu>
    </Dropdown>
        
       <Link className="af">Trending</Link>
       <Link className="af">Chefs</Link>
       <Link className="af">Blog</Link>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="af">
      CategoriesFeatures<FaAngleDown />
      </Dropdown.Toggle>

      <Dropdown.Menu id="cate">
        <Dropdown.Item href="#/action-1" className="text-dark">Breads</Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="text-dark">Breakfast</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Desserts</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Drinks</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Healthy</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Meat</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Pasta</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">SeaFood</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Soap</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" className="af">
      Features<FaAngleDown />
      </Dropdown.Toggle>

      <Dropdown.Menu id="cate">
        <Dropdown.Item href="#/action-1" ><Link to="/about" className="text-dark">About</Link></Dropdown.Item>
        <Dropdown.Item href="#/action-2" className="text-dark">Shop</Dropdown.Item>
        <Dropdown.Item href="#/action-3" className="text-dark">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>


        
      </div>

      <div>

      


      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px"}}>
      
      <CiSearch onClick={()=>setShow(!show)} className="search"/>
      <Offcanvas show={show} onHide={()=>setShow(!show)} placement={'top'}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

      <div style={{width:"80px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      {genderimg ? <img src={man} alt="" className="gender_i"  onClick={()=>{setModalShow(!modalShow)}}/> : <img src={female} alt="" className="gender_i"  onClick={()=>{setModalShow(!modalShow)}}/>}
      <p style={{fontSize:"12px"}}>{gender.FirstName}</p>
      </div>
      
      

      <div className="divbtn">
      <button className="add"><Link to="/recipe">Add Recipe</Link></button>
      </div>
      
      </div>
      </div>

      
    </section>


    <Login modalShow={modalShow}  setModalShow = {setModalShow} setGender={setGender} setReciperout={setReciperout}/>
    </>
  )
}