import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Menu} from "semantic-ui-react";

export default function CategoryPanel() {
const categories = useSelector(state => state.products.categories)

// let categories = []
// useEffect(() => {
//   if(products.items.length>1){
//     products.items.map(item=>{
//       if(!categories.includes(item.category)){
//         categories.push(item.category)
//       }
//     })
//   }
// }, [])

  return (
    <div style={{color:"white", }}>
        <Menu style={{ height: "5em", marginBottom:0, borderRadius:0,display:"flex", justifyContent:"center" }} inverted>
        {categories.map(category=>(
          <Menu.Item>
          <h3>{category}</h3>
        </Menu.Item>
        ))}
          
        
        
      </Menu>
     
    </div>
  );
}
