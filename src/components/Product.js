import React from "react";
import { Image } from "semantic-ui-react";

export default function Product() {
  return (
    <div>
      <div
        style={{ textAlign: "left", marginLeft: "auto", marginRight: "auto" }}
      >
        <Image
          style={{ width: 150, borderRadius: "10%", border: "1px solid gray", padding:6 }}
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          size="small"
        />
        <div style={{ padding: "1em 0 1em 1em"  }}>
          <h2 style={{marginBottom:5}}>$15</h2>
          <h1 style={{fontSize:16, marginTop:0}}>Coffee cup 187ds</h1>
        </div>
      </div>
    </div>
  );
}
