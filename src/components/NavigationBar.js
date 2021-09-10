import React from "react";
import { Link } from "react-router-dom";
import { Input, Menu, Button } from "semantic-ui-react";

export default function NavigationBar() {
  return (
    <div>
      <Menu style={{ height: "5em", marginBottom:0, borderRadius:0 }} inverted>
        <Menu.Item position="left" style={{ marginLeft: "3em" }}>
          <Link to="/"><h1>Online Stroe</h1></Link>
        </Menu.Item>
        <Menu.Item style={{ marginRight: 100, width: "24em" }}>
          <Input className="icon" icon="search" placeholder="Search..." />
        </Menu.Item>

        <Menu.Item style={{ marginRight: "4em" }} position="right">
          <Button size="big" primary>Sign up</Button>
          <Button style={{ marginLeft: 10 }}>Log-in</Button>
        </Menu.Item>
      </Menu>
      <div style={{width:"100%",height:4, background:"linear-gradient(90deg, rgba(255,0,236,1) 0%, rgba(255,0,0,1) 17%, rgba(0,255,0,1) 36%, rgba(0,255,248,1) 53%, rgba(236,255,0,1) 68%, rgba(160,201,108,1) 86%, rgba(0,212,255,1) 100%)"}}>

      </div>
    </div>
  );
}
