import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { Dropdown } from "semantic-ui-react";
import { removeCartPrice, removeUsersCarts } from "../redux/carts/cartsSlice";
import { logUserOut } from "../redux/users/usersSlice";

export default function User({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logUserOut());
    dispatch(removeUsersCarts())
    dispatch(removeCartPrice())
    toast.success("successfully logged out");
    history.push("/");
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Dropdown
        pointing="top right"
        style={{ fontSize: "20px", padding: 10 }}
        text={user.name.firstname +" "+ user.name.lastname}
        icon="user circle"
      >
        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => history.push(`/profile/${user.username}`)}
            icon="user outline"
            text="My Profile"
          />
          <Dropdown.Item
            icon="shopping cart"
            onClick={() => history.push(`/cart/${user.username}`)}
            text="My Cart"
          />
          <Dropdown.Item
            icon="arrow alternate circle left outline"
            onClick={logoutHandler}
            text="Log Out"
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
