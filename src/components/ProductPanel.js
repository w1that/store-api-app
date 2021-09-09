import React from "react";
import {  Grid} from "semantic-ui-react";
import Product from "./Product";

export default function ProductPanel() {
  return (
    <div style={{}}>
      <div style={{ borderRadius: 3, height: "1000px", padding: 10 }}>
        <Grid columns={4}>
          <Grid.Row>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
            <Grid.Column style={{padding:5}}>
       <Product></Product>
      </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
            <Grid.Column style={{ padding: 5 }}>
              <Product></Product>
            </Grid.Column>
            <Grid.Column style={{padding:5}}>
       <Product></Product>
      </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
