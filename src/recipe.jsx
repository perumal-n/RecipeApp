import { useEffect, useState } from "react"
import recipe from "./assets/recipe2.jpg"





export default function Recipe(props){

  const[item, setItem] = useState()
  
  const recipeadd = () =>{
    const updatedRecipeArray = [...props.reciperout.recipe, item];
    
fetch(`https://67d7ed159d5e3a10152c9af5.mockapi.io/userdata/detail/${props.reciperout.ID}`, {
  method: 'PUT', // or PATCH
  headers: {'content-type':'application/json'},
  body: JSON.stringify({ recipe: updatedRecipeArray })
}).then(res => {
  if (res.ok) {
      return res.json();
  }
  // handle error
}).then(task => {
  // Do something with updated task
  console.log(task)
}).catch(error => {
  // handle error
})
  }


  const [addcon, setAddcon] = useState([""]);
  const add = () =>{
    setAddcon([...addcon, ""])
  }

  const [incre, SetIncre] = useState([""]);

  const incredent = () =>{
    SetIncre([...incre, ""])
  }

  const [newtritionvalue, setnewtritionvalue] = useState([""])
  const newtrition = () => {
    setnewtritionvalue([...newtritionvalue, ""]);
  }

  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000);
  },[])

  return(
    <>
    {loading ? <div class="container_recipe"></div> : 
    <>
    <section className="recipe_main">
     <div className="recipe_img">
      <img src={recipe} alt="" />
      <div className="recipe_con">
        <h3>Add Recipe</h3>
        <p>Discover and share your favorite recipes on Platea! Add your own delicious dishes and inspire others with new culinary creations.</p>
        <button className="home_btn">View More</button>
      </div>
     </div>
    </section>

    <section className="recipe_content">
      <div className="recipe_item">

       <div className="recipe_input1">
       <input type="text" placeholder="Title" onChange={(e)=> setItem({...item, Title:e.target.value})}/>
       <textarea name="" id="" placeholder="Instruction" onChange={(e)=> setItem({...item, Instruction:e.target.value})}></textarea>

       <button onClick={add} className="add_b">Add Steps</button>
       <div className="text_areas">
       
       {addcon.map((item, i) => (
         <div style={{padding:"10px"}}>
         <textarea placeholder={`Enter Step${i + 1}`} onChange={(e) => setItem((prev) => ({...prev,[`step${i + 1}`]: e.target.value}))}/>
  </div>
))}
    
       </div>

       <div style={{display:"flex",gap:"60px",alignItems:"center"}}>
        <h3 style={{color:"white"}}>Thumbnail</h3>
        <input type="file" style={{color:"white"}}/>
       </div>
       <div style={{display:"flex",gap:"60px",alignItems:"center"}}>
       <h3 htmlFor="" style={{color:"white"}}>Total Time Taken</h3>
       <input type="text" placeholder="Enter Text" />
       </div>

       </div>

       <div className="cooking_con">
        <h1>What's Cooking</h1>
        <div className="cooking_img">
          <img src={recipe} alt="" />
          <p>30-Minute Dinner Recipes That Will Save Your Weeknights </p>
        </div>
        <div className="cooking_img">
        <img src={recipe} alt="" />
        <p>Our Best One-Pot Meals </p>
        </div>
        <div className="cooking_img">
        <img src={recipe} alt="" />
        <p>Easy Chicken Dinners You'll Make on Repeat  </p>
        </div>
       </div>
      </div>

    

      <div className="main_incredent">
          <div className="sub_incredent">
              <div>
                <p>Incredent</p>
              <button onClick={incredent} className="sub_btn">Add</button>
              </div>

              {incre.map((item, i) => (
                <div className="incredent">
                  <textarea name="" id="" placeholder={`Enter Incredent${i+1}`} onChange={(e) => setItem((pre) => ({...pre,[`ingredients${i+1}`]:e.target.value}))}></textarea>
                </div>
              ))}              
          </div>

          <div className="Newtrition">
            <div>
              <p>Newtrition</p>
              <button onClick={newtrition} className="sub_btn">Add</button>
            </div>

            {newtritionvalue.map((item,i)=>(
              <div>
                <textarea name="" id="" placeholder={`Enter Newtrition${i+1}`} onChange={(e)=> setItem((pre) => ({...pre, [`Newtrition${i+1}`]:e.target.value}))} ></textarea>
              </div>
            ))}
          </div>
          
       </div>
       <button onClick={recipeadd}>Submit</button>
    </section>
    </>
    }
   
    </>
  )
}