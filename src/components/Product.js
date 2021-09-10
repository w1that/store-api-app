import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "semantic-ui-react";

export default function Product({title, price,image}) {
  const [border, setBorder] = useState("1px solid gray")
  
  const onClickHandler =(item)=>{
<Link to={{pathname:`/products/${item.id}`}} />
  }
  return (
    <div style={{padding:40}}>
      <div
        style={{ textAlign: "left",margin:10, width:150, color:"black" }}
        onMouseOver={()=>setBorder("3px solid gray")}
        onMouseLeave={()=>setBorder("1px solid gray")}
        onClick={onClickHandler}
      >
        <Image
          style={{ width: 150,height:210, borderRadius: "10%", border:border , padding:6 }}
          src={image}
          size="small"
        />
        <div style={{ padding: "1em 0 1em 1em"  }}>
          <h2 style={{marginBottom:5}}>{price}</h2>
          <h1 style={{fontSize:16, marginTop:0}}>{title.length<50?title:title.substring(0,50)+"..."}</h1>
        </div>
      </div>
    </div>
  );
}
