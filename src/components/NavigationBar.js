import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Input, Menu, Button } from "semantic-ui-react";
import { setSearchedProduct } from "../redux/products/productsSlice";
import User from "./User";

export default function NavigationBar() {
  const user = useSelector((state) => state.users.user);
  
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
            type="text"
            placeholder="Search..."
            action
          >
            <input />
            <Button type="submit">
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
