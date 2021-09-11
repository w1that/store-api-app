import React from "react";
import { Menu, Header} from "semantic-ui-react";

export default function Footer() {
  return (
    <div style={{position:"fixed", bottom:0, width:"100%"}}>
          <div style={{width:"100%",height:4, background:"linear-gradient(90deg, rgba(255,0,236,1) 0%, rgba(255,0,0,1) 17%, rgba(0,255,0,1) 36%, rgba(0,255,248,1) 53%, rgba(236,255,0,1) 68%, rgba(160,201,108,1) 86%, rgba(0,212,255,1) 100%)"}}>
</div>
      <div
        style={{ height: "5em", marginTop: 0, borderRadius: 0, background:"black", display:"flex", justifyContent:"space-between" }}
        inverted
      >
        <Menu.Item >
          <Header as="h2">
            <h1 style={{marginTop:10,color:"white", marginLeft:"3em"}}>Github</h1>
          </Header>
        </Menu.Item>

        <Menu.Item style={{ marginRight: "3em" }}>
          <h1 style={{marginTop:10,color:"white"}}>Online Stroe</h1>
        </Menu.Item>
      </div>
    </div>
  );
}
