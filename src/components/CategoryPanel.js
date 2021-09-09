import React from "react";
import { Menu} from "semantic-ui-react";

export default function CategoryPanel() {

  return (
    <div style={{color:"white", }}>
        <Menu style={{ height: "5em", marginBottom:0, borderRadius:0,display:"flex", justifyContent:"center" }} inverted>
        <Menu.Item onClick={()=>alert("1")}>
          <h1>Online Stroe</h1>
        </Menu.Item>
        <Menu.Item onClick={()=>alert("2")}>
          <h1>Online Stroe</h1>
        </Menu.Item>
        <Menu.Item onClick={()=>alert("3")}>
          <h1>Online Stroe</h1>
        </Menu.Item>
      </Menu>
     
    </div>
  );
}
