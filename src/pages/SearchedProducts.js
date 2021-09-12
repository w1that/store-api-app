import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import Product from "../components/Product";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function SearchedProducts() {
  const searchedProducts = useSelector(
    (state) => state.products.searchedProducts
  );
  console.log(searchedProducts);
  let text = useParams();

  return (
    <div style={{}}>
      <div style={{ borderRadius: 3, padding: 10 }}>
        <Grid columns={4} style={{ padding: 3 }}>
          <Grid.Row key={nanoid()} style={{ padding: 5 }}>
            {searchedProducts.map((item) => (
              <Link to={`/products/${item.id}`}>
                <Product
                  title={item.title}
                  price={item.price}
                  image={item.image}
                ></Product>
              </Link>
            ))}
          </Grid.Row>
        </Grid>
      </div>
    </div>
  );
}
