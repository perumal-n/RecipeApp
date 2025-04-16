import { useEffect, useState } from "react"
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import Back1 from "./assets/back1.jpg"
import Back2 from "./assets/back2.jpg"
import Back3 from "./assets/back4.jpg"
import gold from "./assets/gold.png"
import Aboutimg1 from "./assets/img1.avif"
import Aboutimg2 from "./assets/img9.jpg"
import line from "./assets/line.png"
import goldborder from "./assets/goldborder.png"
import video from "./assets/video.mp4"
export default function Home(){

  const[fetchdata, setfetchdata] =  useState(null);
  const[changesss, setChanges] = useState("Chicken");
  const [change, setchange]= useState("");
  
  const handleScroll = (direction) => {
    const mainBox = document.getElementById("main_box");
    if (!mainBox) return;
  
    mainBox.scrollBy({ left: direction === "next" ? 400 : -400, behavior: "smooth" });
  };

  const [ btnmore, setMore] = useState(true)

  const more = () => {
    setMore(!btnmore)
    let recipe_container = document.querySelector(".recipe_container");
    // let more = document.querySelector(".more")

    if (!recipe_container) return;


    (btnmore && btnmore ? recipe_container.style.height = "100%" : recipe_container.style = "height:730px")
  }

  useEffect(()=>{
        let diffdata = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${changesss}`);
      let diffdatas = diffdata.then((item)=>item.json())
      diffdatas.then((items) => setchange(items));
  },[changesss]);
// console.log(change)

useEffect(()=>{
    let apidata = fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  let data = apidata.then((item)=>item.json())
  data.then((items)=>setfetchdata(items))
},[])


const [country, setCountry] = useState("Indian");
const [con, setCon] = useState("")
useEffect(()=>{
  let countryapi = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`);
  let countrydata = countryapi.then((item)=>item.json())
  countrydata.then((items)=> setCon(items))
},[country])

useEffect(()=>{
  const scrollBox = document.getElementById("scroll_box");

  scrollBox.addEventListener("scroll", () => {
      // console.log("Scroll Height:", scrollBox.scrollHeight);
      // console.log("Scroll Top:", scrollBox.scrollTop);
      // console.log("Client Height:", scrollBox.clientHeight);

      if(scrollBox.scrollTop > 0 && scrollBox.scrollTop < 327){
        setCountry("Indian")
        if(scrollBox.scrollTop > 140 && scrollBox.scrollTop < 227){
          document.getElementById("scroll_p").style.opacity = "0.5"
          document.getElementById("scroll_p").style.transition = "opacity 1s ease"
        }
        else if(scrollBox.scrollTop > 227 && scrollBox.scrollTop < 327){
          document.getElementById("scroll_p").style.opacity = "0.1"
          document.getElementById("scroll_p").style.transition = "opacity 0.6s ease"
        }
        else{
          document.getElementById("scroll_p").style.opacity = "1"
          document.getElementById("scroll_p").style.transition = "opacity 1s ease"
        }
      }
      else if(scrollBox.scrollTop > 328 && scrollBox.scrollTop < 864){
        setCountry("American")
        if(scrollBox.scrollTop > 450 && scrollBox.scrollTop < 600){
          document.getElementById("scroll_p2").style.opacity = "0.5"
          document.getElementById("scroll_p2").style.transition = "opacity 1s ease"
        }
        else if(scrollBox.scrollTop > 601 && scrollBox.scrollTop < 864){
          document.getElementById("scroll_p2").style.opacity = "0.1"
          document.getElementById("scroll_p2").style.transition = "opacity 0.6s ease"
        }
        else{
          document.getElementById("scroll_p2").style.opacity = "1"
          document.getElementById("scroll_p2").style.transition = "opacity 1s ease"
        }
      }
      else if(scrollBox.scrollTop > 865 && scrollBox.scrollTop < 1365){
        setCountry("Canadian")
        if(scrollBox.scrollTop > 950 && scrollBox.scrollTop < 1100){
          document.getElementById("scroll_p3").style.opacity = "0.5"
          document.getElementById("scroll_p3").style.transition = "opacity 1s ease"
        }
        else if(scrollBox.scrollTop > 1100 && scrollBox.scrollTop < 1365){
          document.getElementById("scroll_p3").style.opacity = "0.1"
          document.getElementById("scroll_p3").style.transition = "opacity 0.6s ease"
        }
        else{
          document.getElementById("scroll_p3").style.opacity = "1"
          document.getElementById("scroll_p3").style.transition = "opacity 1s ease"
        }
      }
      else if(scrollBox.scrollTop > 1366 && scrollBox.scrollTop < 1865){
        setCountry("British")
        if(scrollBox.scrollTop > 1450 && scrollBox.scrollTop < 1600){
          document.getElementById("scroll_p4").style.opacity = "0.5"
          document.getElementById("scroll_p4").style.transition = "opacity 1s ease"
        }
        else if(scrollBox.scrollTop > 1601 && scrollBox.scrollTop < 1865){
          document.getElementById("scroll_p4").style.opacity = "0.1"
          document.getElementById("scroll_p4").style.transition = "opacity 0.6s ease"
        }
        else{
          document.getElementById("scroll_p4").style.opacity = "1"
          document.getElementById("scroll_p4").style.transition = "opacity 1s ease"
        }
      }
      else if(scrollBox.scrollTop > 1866 && scrollBox.scrollTop < 2365){
        setCountry("French")
      }
      else if(scrollBox.scrollTop > 2366 && scrollBox.scrollTop < 2865){
        setCountry("Malaysian")
      }
      else if(scrollBox.scrollTop > 2866 && scrollBox.scrollTop < 3365){
        setCountry("Jamaican")
      }
      else if(scrollBox.scrollTop > 3366 && scrollBox.scrollTop < 3865){
        setCountry("Chinese")
      }
      else if(scrollBox.scrollTop > 3866 && scrollBox.scrollTop < 4365){
        setCountry("Greek")
      }
      else if(scrollBox.scrollTop > 4366 && scrollBox.scrollTop < 4865){
        setCountry("Irish")
      }
  });
},[])
// console.log(con)


// recipe

const [recipe , setRecipe] = useState("")
const [letter, setLetter] = useState("")
useEffect(()=>{
  if(letter == ""){
    let recipe1 = fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`)
  let recpie1data = recipe1.then((item)=>item.json());
  recpie1data.then((items)=>setRecipe(items))
  }
  else if(letter.length == 1){
    let letterapi = fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
    let letterdata = letterapi.then((item)=>item.json());
    letterdata.then((items)=>setRecipe(items))
  }
  else if(letter.length > 1){
    console.log("Greater")
  }
},[letter]);

useEffect(() => {
  const handleBeforeUnload = (e) => {
    e.preventDefault();
    e.returnValue = ''; 
  };

  window.addEventListener('beforeunload', handleBeforeUnload);

  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, []);


//review

const inputsee = () =>{
  document.querySelector(".review_input").style.display="block"
}


const review = [
  {
    name:"Ranjith",
    star:4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci nulla sunt nam temporibus accusamus blanditiis consequuntur excepturi ullam dolor."
  },
  {
    name:"Rakesh",
    star:4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci nulla sunt nam temporibus accusamus blanditiis consequuntur excepturi ullam dolor."
  },
  {
    name:"ramya",
    star:4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci nulla sunt nam temporibus accusamus blanditiis consequuntur excepturi ullam dolor."
  },
  {
    name:"Raja",
    star:4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci nulla sunt nam temporibus accusamus blanditiis consequuntur excepturi ullam dolor."
  },
  {
    name:"Ragavi",
    star:4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci nulla sunt nam temporibus accusamus blanditiis consequuntur excepturi ullam dolor."
  },
  {
    name:"Ranjini",
    star:4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci nulla sunt nam temporibus accusamus blanditiis consequuntur excepturi ullam dolor."
  },
  {
    name:"Rahul",
    star:4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci nulla sunt nam temporibus accusamus blanditiis consequuntur excepturi ullam dolor."
  },
  {
    name:"Raksha",
    star:4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci nulla sunt nam temporibus accusamus blanditiis consequuntur excepturi ullam dolor."
  },
  {
    name:"raju",
    star:4,
    comment:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci nulla sunt nam temporibus accusamus blanditiis consequuntur excepturi ullam dolor."
  }
]


  return(
    <>
    <section className="home">
    <Carousel  fade>
      <Carousel.Item style={{height:"100vh"}}>
        <img src={Back1} alt="" style={{width:"100%",height:"100%",filter: "brightness(40%)",backgroundColor: "black",objectFit:"cover"}}  className="img1"/>
        <Carousel.Caption>
          <div className="home_content">
          <div className="homeai1">
            <img src={gold} alt="" />
          <h5 className="flavor">Flavor Meets Elegance</h5>
          </div>
          <h3>Savor the Season, One Recipe at a Time</h3>
          <p>Bringing Recipes to Life with Flavor, Passion, and Creativity.</p>
          <button className="home_btn">View Recipes</button>
          </div>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"100vh"}}>
      <img src={Back2} alt="" style={{width:"100%",height:"100%",filter: "brightness(40%)",backgroundColor: "black",objectFit:"cover"}}  className="img1"/>
        <Carousel.Caption>
          <div className="home_content">
         <div className="homeai1">
         <img src={gold} alt="" />
         <h5 className="flavor">Flavor Meets Elegance</h5>
         </div>
          <h3>Inspired by Tradition, Crafted for Today</h3>
          <p>Bringing Recipes to Life with Flavor, Passion, and Creativity.</p>
          <button className="home_btn">View Recipes</button>
          </div>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:"100vh"}}>
      <img src={Back3} alt="" style={{width:"100%",height:"100%",filter: "brightness(40%)",backgroundColor: "black",objectFit:"cover"}} className="img1"/>
        <Carousel.Caption>
        <div className="home_content">
        <div className="homeai1">
        <img src={gold} alt="" />
        <h5 className="flavor">Flavor Meets Elegance</h5>
        </div>
          <h3>Cook with Love, Savor with Joy</h3>
          <p>
          Bringing Recipes to Life with Flavor, Passion, and Creativity.
          </p>
          <button className="home_btn">View Recipes</button>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>

    <section className="about">
  <div className="aboutline">
    <img src={line} alt="" />
  <h1>About Us</h1>
  </div>
  <div className="aboutcontent1">
    <div className="aboutimg">
      <img src={Aboutimg1} alt="" />
    </div>
    <div className="about_pra">
      <p className="about_pra1">Inspired by flavors and passion, we create delightful recipes that turn every meal into a celebration.</p>
      <p>We are passionate food lovers committed to creating delightful recipes that spark joy in every kitchen. With a focus on fresh ingredients and rich flavors, we strive to make cooking an enjoyable and inspiring experience for all.</p>
      <button className="home_btn">View More</button>
    </div>
  </div>

  <div className="aboutcontent2">
  
    <div className="about_pra">
      <p className="about_pra1">Bringing you delicious recipes made with love and fresh ingredients. Let's make every meal a celebration of flavors!</p>
      <p>We are passionate food lovers dedicated to creating delightful recipes that spark joy in every kitchen. With a focus on fresh ingredients and vibrant flavors, we strive to make cooking an exciting and rewarding experience for all.</p>
      <button className="home_btn">View More</button>
    </div>
    <div className="aboutimg">
      <img src={Aboutimg2} alt="" />
    </div>
  </div>
</section>


<section className="trending">
<div className="aboutline">
    <img src={line} alt="" />
  <h1>Trending Items</h1>
  </div>

  <div className="maintrending_card">
  {fetchdata && (fetchdata.categories) ? (
  (fetchdata.categories).map((item) => 
  <div className="trending_card">
    <img src={goldborder} alt="" className="goldborder"/>
    <img src={goldborder} alt="" className="goldborder2"/>
    <img src={item.strCategoryThumb} alt="" className="foodimg1"/>
    <div className="trending_content">
      <p>{item.strCategory}</p>
      <button className="home_btn">View More</button>
    </div>
  </div>)
) : (
  <div className="boxes">
         <div class="containers">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
        </div>
)}
  </div>
</section>

<section className="video">
  <video controls loop autoPlay muted style={{width:"70%",borderRadius:"20px"}}>
    <source src={video} autoPlay />
  </video>
</section>


<section className="collection">
  <div className="btn_coloection">
    <div>
      <p className="col_p">Currated recipe collections for Non-Veg</p>
      <p>A special collection of recipes from the team Flavor.</p>
    </div>

    <div className="col_btn">
      <button onClick={()=>setChanges('Chicken')}>Chicken</button>
      <button onClick={()=>setChanges('Egg')}>Egg</button>
      <button onClick={()=>setChanges('Goat')}>Goat</button>
      <button onClick={()=>setChanges('Milk')}>Milk</button>
      <button onClick={()=>setChanges('Bread')}>Breads</button>
      <button onClick={()=>setChanges('Meat')}>Meat</button>
      <button onClick={()=>setChanges('Fish')}>SeaFood</button>
    </div>
  </div>

  <div className="main_box" id="main_box">
      {change && (change?.meals) ? (
        (change.meals).map((item, index) => (
          <div className="box">
            <img src={item?.strMealThumb} alt="" />
            <p>{item?.strMeal}</p>
          </div>
        ))
      ) : (
        <div className="boxs">
        <div class="containers">
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
         <div class="dot"></div>
       </div>
       </div>
      )}
    </div>
    <div style={{position:"absolute",bottom:"90px",right:"200px"}}>
    <button onClick={() => handleScroll("prev")}>Previous</button>
    <button onClick={() => handleScroll("next")}>Next</button>
    </div>
</section>

<section className="scroll_box" id="scroll_box">
  <div className="scroll_box1">
      {con ? <img src={con && con.meals[1].strMealThumb} alt="" /> : 
      <div className="boxs">
      <div class="container1">
       <div class="dot"></div>
       <div class="dot"></div>
       <div class="dot"></div>
       <div class="dot"></div>
       <div class="dot"></div>
       <div class="dot"></div>
     </div>
     </div>
        }
  </div>
  <div className="scroll_box2">
    <div id="scroll_p">
      <h2>{country}</h2>
      <h4>{con && con.meals[1].strMeal}</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
    <div id="scroll_p2">
    <h2>{country}</h2>
    <h4>{con && con.meals[1].strMeal}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
    <div  id="scroll_p3">
    <h2>{country}</h2>
    <h4>{con && con.meals[1].strMeal}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
    <div id="scroll_p4">
    <h2>{country}</h2>
    <h4>{con && con.meals[1].strMeal}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
    <div>
    <h2>{country}</h2>
    <h4>{con && con.meals[1].strMeal}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
    <div>
    <h2>{country}</h2>
    <h4>{con && con.meals[1].strMeal}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
    <div>
    <h2>{country}</h2>
    <h4>{con && con.meals[1].strMeal}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
    <div>
    <h2>{country}</h2>
    <h4>{con && con.meals[1].strMeal}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
    <div>
    <h2>{country}</h2>
    <h4>{con && con.meals[1].strMeal}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
    <div>
    <h2>{country}</h2>
    <h4>{con && con.meals[1].strMeal}</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, adipisci.</p>
    </div>
  </div>
</section>

<section className="recipe">
  <div>
    <h3>New Recipe</h3>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, id.</p>
    <div>
      <button onClick={()=>setLetter('')}>All Recipe</button>
      <button >Appetizer</button>
      <button>Main Dish</button>
      <button>Dessert</button>
      <button>Drinks</button>
    </div>
  </div>
  <div className="recipe_sub">
    <div className="recipe_container">
        {recipe && recipe?.meals ? (recipe.meals).map((item)=>(
            <div className="recipe_box">
              <img src={item.strMealThumb} alt="" />
            </div>
        )) : <p>Error</p>}
    </div>
    <button onClick={()=>more()} className="more">View More</button>
    <div className="alpha">
        <span onClick={()=>setLetter('a')}>A</span>
        <span onClick={()=>setLetter('b')}>B</span>
        <span onClick={()=>setLetter('c')}>C</span>
        <span onClick={()=>setLetter('d')}>D</span>
        <span onClick={()=>setLetter('e')}>E</span>
        <span onClick={()=>setLetter('f')}>F</span>
        <span onClick={()=>setLetter('g')}>G</span>
        <span onClick={()=>setLetter('h')}>H</span>
        <span onClick={()=>setLetter('i')}>I</span>
        <span onClick={()=>setLetter('j')}>J</span>
        <span onClick={()=>setLetter('k')}>K</span>
        <span onClick={()=>setLetter('l')}>L</span>
        <span onClick={()=>setLetter('m')}>M</span>
        <span onClick={()=>setLetter('n')}>N</span>
        <span onClick={()=>setLetter('o')}>O</span>
        <span onClick={()=>setLetter('p')}>P</span>
        <span onClick={()=>setLetter('q')}>Q</span>
        <span onClick={()=>setLetter('r')}>R</span>
        <span onClick={()=>setLetter('s')}>S</span>
        <span onClick={()=>setLetter('t')}>T</span>
        <span onClick={()=>setLetter('u')}>U</span>
        <span onClick={()=>setLetter('v')}>V</span>
        <span onClick={()=>setLetter('w')}>W</span>
        <span onClick={()=>setLetter('x')}>X</span>
        <span onClick={()=>setLetter('y')}>Y</span>
        <span onClick={()=>setLetter('z')}>Z</span>
    </div>
  </div>
</section>


<section className="cheif">

  <div className="cheif1">
    <div>
      <div>5.0</div>
      <div>score from 10.000 rating</div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aliquid inventore velit voluptate, soluta veritatis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad numquam quidem rerum officiis facilis enim provident delectus fugit corrupti!</p>
    <button>View Recipe</button>
  </div>

  <div className="cheif2">

  <div>
      <div>5.0</div>
      <div>score from 10.000 rating</div>
    </div>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea aliquid inventore velit voluptate, soluta veritatis.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ad numquam quidem rerum officiis facilis enim provident delectus fugit corrupti!</p>
    <button>View Recipe</button>
  </div>
</section>

<section className="blog">
  <div className="main_blog1">
    <div className="blog_img">
    <h1>Our Journal</h1>
    <img src={line} alt="" />
    </div>
    <p>Discover stories, tips, and trends to inspire your culinary journey and creativity!</p>
  </div>


  <div className="main_blog2">
    <div className="blog_sub1">
      <img src={Back1} alt="" />
      <p>Power Up Your Mornings: 5 Quick and Healthy Breakfast Ideas</p>
      <button className="home_btn">View Blog</button>
    </div>
    <div className="blog_sub1">
        <img src={Back2} alt="" />
        <p>Master Knife Skills for Effortless Cooking Prep</p>
        <button className="home_btn">View Blog</button>
    </div>
    <div className="blog_sub1">
        <img src={Back3} alt="" />
        <p>Savor Every Bite: A Celebration of Pizza Moments</p>
        <button className="home_btn">View Blog</button>
    </div>
  </div>
</section>

<section className="review">
 <h3>What our customer say</h3>
 <div className="main_review">
    <div className="sub_review">
      <div>
      <p>All Review 4.3</p>
      </div>
      <div style={{display:"flex"}}>
            <FaGoogle />
           <p>Google 4.2</p>
      </div>
      <div style={{display:"flex"}}>
      <FaFacebookF />
      <p>Face Book 4.1</p>
      </div>

    </div>

    <div className="review_rate">
        <div>
        <p>Overall Rating</p>
        <p>4.2 </p>
        </div>
        <button onClick={inputsee}>Write a Review</button>

       
    </div>
    <input type="text" placeholder="Enter Your review" className="review_input"/>
 </div>

 <div className="sliders">
  <div className="slide_track">
    {review.map((item, index) => (
      <div className="slide_content" key={`original-${index}`}>
        <p>{item.name}</p>
        <p>{item.star}</p>
        <p>{item.comment}</p>
      </div>
    ))}

    {review.map((item, index) => (
      <div className="slide_content" key={`duplicate-${index}`}>
        <p>{item.name}</p>
        <p>{item.star}</p>
        <p>{item.comment}</p>
      </div>
    ))}
  </div>
</div>
</section>
    </>
  )
}
