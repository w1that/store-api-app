import React from "react";
import { Menu, Header} from "semantic-ui-react";

export default function Footer() {
  return (
    <div >
          <div style={{width:"100%",height:4, background:"linear-gradient(90deg, rgba(255,0,236,1) 0%, rgba(255,0,0,1) 17%, rgba(0,255,0,1) 36%, rgba(0,255,248,1) 53%, rgba(236,255,0,1) 68%, rgba(160,201,108,1) 86%, rgba(0,212,255,1) 100%)"}}>
</div>
      <Menu
        style={{ height: "5em", marginTop: 0, borderRadius: 0}}
        inverted
      >
        <Menu.Item >
          <Header as="h2">
            <h1 style={{color:"white"}}>Github</h1>
          </Header>
        </Menu.Item>

        <Menu.Item position="right" style={{ marginLeft: "3em" }}>
          <h1>Online Stroe</h1>
        </Menu.Item>
      </Menu>
    </div>
  );
}
