import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { Form, Button, Container, Message, Loader } from "semantic-ui-react";
import { getCartsAsync, setUsersCarts } from "../redux/carts/cartsSlice";
import { getUsersAsync, setUser } from "../redux/users/usersSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector((state) => state.users);
  const carts = useSelector((state) => state.carts.items);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  useEffect(() => {
    dispatch(getUsersAsync());
    dispatch(getCartsAsync());
  }, [dispatch]);

  if (users.isLoading || carts.isLoading) {
    return (
      <Loader active size="massive">
        Loading
      </Loader>
    );
  }

  const submitHandle = () => {
    if (userName === "") {
      setMessage("please fill the username field");
      return;
    }
    if (password === "") {
      setMessage("please fill the password field");
      return;
    }

    users.items.map((user) => {
      if (user.username === userName && user.password === password) {
        dispatch(setUser(user));
        history.push("/");
        toast.success("successfully logged in", {
          position: "bottom-right",
        });
        carts.map((cart) => {
          if (cart.userId == user.id) {
            dispatch(setUsersCarts(cart));
          }
        });
      } else {
        setMessage("please check the infos you entered");
        setUserName("");
        setPassword("");
      }
    });
  };
  return (
    <div>
      <Container>
        <Form
          style={{
            borderRadius: 10,
            marginTop: "10em",
            background: "#f5f5ff",
            padding: "3em",
            width: "30em",
            height: "30em",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h1 style={{ color: "black" }}>Online Stroe</h1>
          <Form.Field style={{ marginTop: "2em" }}>
            <label>Username</label>
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              placeholder="Username"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
          </Form.Field>
          <Form.Field>
            <Button
              onClick={submitHandle}
              style={{
                color: "black",
                backgroundColor: "#c4c4ff",
                position: "absolute",
                right: "4em",
                marginTop: "1em",
              }}
              type="submit"
            >
              Login
            </Button>
          </Form.Field>

          {message ? (
            <Form.Field style={{ position: "absolute", bottom: 0 }}>
              <Message content={message} />
            </Form.Field>
          ) : (
            ""
          )}
        </Form>
      </Container>
    </div>
  );
}
