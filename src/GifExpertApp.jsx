import { useState } from "react";
import { AddCategory, GifGrid} from "./components";


 export const GifExpertApp = () => {
  
  const [ categories, setCategories ] = useState(['One Puch']);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory )) return;
    setCategories([newCategory, ...categories]);
  }
  //console.log(categorias);
  return (
    <>
       {/* titulo */} 
       <h1>GifExpertApp</h1>


        {/* input */}
        {/* <AddCategory setCategories={ (categories)=>setCategories(categories) }/> */}
        <AddCategory onNewCategory ={ onAddCategory } />


        {/* <button onClick={ onAddCategory }>Add</button> */}
        {/* listado de GIF */}

          {
            categories.map( (category)=>
              (
              // <div key={ category}>
              //   <h3>{ category }</h3>
              // <li key={category}>{category}</li>
              // </div> 
              <GifGrid 
              key={ category}
              category={ category }
              />
              )
            )
           }
      
        
        {/* GIF Item */}
    </>
 
  )
}
