import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import { getProductsAsync } from "../redux/products/productsSlice";

export default function CategoryPanel() {
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  return (
    <div style={{ color: "white" }}>
      <Menu
        style={{
          height: "5em",
          marginBottom: 0,
          borderRadius: 0,
          display: "flex",
          justifyContent: "center",
        }}
        inverted
      >
        <Menu.Item>
          <Link to={`/`}>
            <h3 style={{ color: "yellow" }}>all</h3>
          </Link>
        </Menu.Item>
        {categories.map((category) => (
          <Menu.Item>
            <Link to={`/${category}`}>
              <h3>{category}</h3>
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
