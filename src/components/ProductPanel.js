import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  Grid, GridRow} from "semantic-ui-react";
import { getProductsAsync, setCategories } from "../redux/products/productsSlice";
import Product from "./Product";

export default function ProductPanel() {
  const products = useSelector(state => state.products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsAsync())
    
  }, [])
  
  if(products.isLoading){
    return(<h1>isloading</h1>)
  }
  return (
    <div style={{}}>
      <div style={{ borderRadius: 3, padding: 10 }}>
        <Grid  columns={4} style={{padding:3}}>
          <Grid.Row key={nanoid()}  style={{ padding: 5 }}>
            {products.items.map(item=>(
              <Link to={`/products/${item.id}`}><Product title={item.title} price={item.price} image={item.image}></Product></Link>
              
            ))}
          </Grid.Row>

        </Grid>
      </div>
    </div>
  );
}
