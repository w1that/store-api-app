import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Menu } from "semantic-ui-react";
import { getProductsAsync } from "../redux/products/productsSlice";

export default function CategoryPanel() {
  const categories = useSelector((state) => state.products.categories);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProductsAsync())
  }, [dispatch])
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
        {categories.map((category) => (
          <Menu.Item>
            <h3>{category}</h3>
          </Menu.Item>
        ))}
      </Menu>
    </div>
  );
}
