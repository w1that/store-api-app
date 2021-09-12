import { nanoid } from '@reduxjs/toolkit'
import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import Product from '../components/Product'

export default function CategoriesProductsPage() {
    let {category} =useParams()
    const products = useSelector((state) => state.products);
    
    return (
       
    <div >
    <div style={{ borderRadius: 3, padding: 10 }}>
      <Grid columns={4} style={{ padding: 3 }}>
        <Grid.Row key={nanoid()} style={{ padding: 5 }}>
          {products.items.map((item) => {
              if(item.category===category){
                  return(<Link to={`/products/${item.id}`}>
              <Product
                title={item.title}
                price={item.price}
                image={item.image}
              ></Product>
            </Link>)
              }
          })}
          
        </Grid.Row>
      </Grid>
    </div>
  </div>
    )
}
