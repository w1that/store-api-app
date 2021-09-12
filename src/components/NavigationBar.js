import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Input, Menu, Button } from "semantic-ui-react";
import {
  removeSearchedProducts,
  setSearchedProducts,
} from "../redux/products/productsSlice";
import User from "./User";

export default function NavigationBar() {
  const history = useHistory();
  const user = useSelector((state) => state.users.user);
  const searchedProducts = useSelector(
    (state) => state.products.searchedProducts
  );
  const products = useSelector((state) => state.products.items);
  const [searchedText, setSearchedText] = useState("");
  const dispatch = useDispatch();

  function searchHandler(e) {
    setSearchedText(e.target.value);
    if (!searchedText) {
      dispatch(removeSearchedProducts());
    }
  }

  function searchClickHandler() {
    products.map((product) => {
      if (product.title.toLowerCase().includes(searchedText) && searchedText) {
        if (!searchedProducts.includes(product)) {
          dispatch(setSearchedProducts(product));
          history.push(`/search/${searchedText}`);
          setSearchedText("");
        }
      }

      return;
    });
  }

  return (
    <div>
      <Menu
        style={{ height: "5em", marginBottom: 0, borderRadius: 0 }}
        inverted
      >
        <Menu.Item position="left" style={{ marginLeft: "3em" }}>
          <Link to="/">
            <h1>Online Stroe</h1>
          </Link>
        </Menu.Item>
        <Menu.Item style={{ marginRight: 100, width: "24em" }}>
          <Input
            onChange={searchHandler}
            value={searchedText}
            type="text"
            placeholder="Search..."
            action
          >
            <input />
            <Button onClick={searchClickHandler} type="submit">
              Search
            </Button>
          </Input>
        </Menu.Item>
        {user.username ? (
          <Menu.Item style={{ marginRight: "4em" }} position="right">
            <User user={user}></User>
          </Menu.Item>
        ) : (
          <Menu.Item style={{ marginRight: "4em" }} position="right">
            <Link to="/signin">
              <Button style={{ background: "white", color: "black" }}>
                Log-in
              </Button>
            </Link>

            <Button
              style={{
                color: "black",
                background: "rgb(199, 199, 255)",
                marginLeft: 10,
              }}
              size="big"
              primary
            >
              Sign up
            </Button>
          </Menu.Item>
        )}
      </Menu>
      <div
        style={{
          width: "100%",
          height: 4,
          background:
            "linear-gradient(90deg, rgba(255,0,236,1) 0%, rgba(255,0,0,1) 17%, rgba(0,255,0,1) 36%, rgba(0,255,248,1) 53%, rgba(236,255,0,1) 68%, rgba(160,201,108,1) 86%, rgba(0,212,255,1) 100%)",
        }}
      ></div>
    </div>
  );
}
