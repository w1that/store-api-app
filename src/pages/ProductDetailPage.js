import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Grid, Icon, Image, Button } from "semantic-ui-react";

export default function ProductDetailPage() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      
      response.data.filter((product) => {
        if (product.id.toString() === id) {
          setProduct(product);
        }
      });
    });
  }, [id]); 

  return (
    <div style={{ paddingBottom: 102 }}>
      <Grid
        className="container"
        style={{ width: 1000, padding: 60, marginTop: 100 }}
      >
        <Grid.Column width={6}>
          <Image
            style={{
              width: 300,
              border: "3px solid #f5f5ff",
              padding: 30,
              borderRadius: 10,
            }}
            src={product.image}
          ></Image>
        </Grid.Column>
        <Grid.Column
          style={{ padding: 40, background: "#f2f2ff", borderRadius: 10 }}
          width={8}
        >
          <h1>{product.title}</h1>
          <h4>{product.description}</h4>
          <div style={{ display: "flex", paddingTop: 30 }}>
            <h4 style={{ position: "absolute", padding: 5, right: "2.2em" }}>
              {product.category}
            </h4>
            <div style={{ display: "flex" }}>
              <div style={{ padding: 4 }}>
                <Icon size="large" name="star" />
                <Icon size="large" name="star" />
                <Icon size="large" name="star" />
              </div>{" "}
              <p style={{ fontSize: 20 }}>( vote)</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: 80,
            }}
          >
             
            <Button
              size="big"
              style={{ padding: 18, backgroundColor: "#c7c7ff" }}
              animated="fade"
            >
              <Button.Content hidden>Shop</Button.Content>
              <Button.Content visible>
                ${product.price}
                <Icon style={{ marginLeft: 10 }} name="shop" />
              </Button.Content>
            </Button>
          </div>
        </Grid.Column>
      </Grid>
    </div>
  );
}
