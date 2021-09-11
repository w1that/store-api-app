import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider, Loader, Button } from "semantic-ui-react";
import {
  getCartsAsync,
  setCartPrice,
  setUsersCarts,
} from "../redux/carts/cartsSlice";
import { setUser } from "../redux/users/usersSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartPrice = useSelector((state) => state.carts.cartPrice);
  const usersCarts = useSelector((state) => state.carts.usersCarts);
  const products = useSelector((state) => state.products.items);
  const [cartPr, setCartPr] = useState(0)
  const [productsInCart, setProductsInCart] = useState([]);

  {
    products.map((prod) => {
      usersCarts.map((usersCart) => {
        usersCart.products.map((product) => {
          if (prod.id == product.productId && !productsInCart.includes(prod)) {
            setProductsInCart((productsInCart) => [...productsInCart, prod]);
          }
        });
      });
    });
  }

  
    useEffect(() => {
        usersCarts.map((usersCart) => {
            usersCart.products.map((product) => {
              products.map((prod) => {
                if (prod.id == product.productId) {
                    setCartPr(cartprice => cartprice+(product.quantity*prod.price))
                }
              });
            });
          });
    }, [dispatch])
  

  console.log(cartPr);
  return (
    <div>
      {usersCarts.map((usersCart) => {
        return (
          <div>
            <ul>
              <Divider style={{ color: "blue" }} horizontal>
                Transaction
              </Divider>
              {usersCart.products.map((product) => {
                return (
                  <div>
                    <li
                      style={{
                        textAlign: "left",
                        background: "#f3edff",
                        borderRadius: 10,
                      }}
                    >
                      {products.map((prod) => {
                        if (prod.id == product.productId) {
                          return (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: 10,
                              }}
                            >
                              <h2 style={{ margin: 0 }}>{prod.title}</h2>
                              <h2 style={{ margin: 0, fontFamily: "bold" }}>
                                {product.quantity}x{prod.price}=
                                {product.quantity * prod.price}
                              </h2>
                              
                            </div>
                          );
                        }
                      })}
                     
                      <div class="ui divider"></div>
                    </li>
                    
                  </div>
                  
                );
              })}
            </ul> 
            <h1>Subtotal: {cartPr}</h1> 
          </div>
        );
      })}
    </div>
  );
}
