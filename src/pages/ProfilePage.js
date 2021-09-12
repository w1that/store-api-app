import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Image } from "semantic-ui-react";

export default function ProfilePage() {
  const user = useSelector((state) => state.users.user);
  const [picture, setPicture] = useState("");
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => setPicture(response.data.results[0].picture.large));
  }, [axios]);

  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        padding: "1em",
        marginLeft: "20em",
        marginTop: "8em",
      }}
    >
      <div
        style={{
          padding: "2em",
          alignSelf: "center",
          border: "1px solid black",
          borderRadius: "10px",
        }}
      >
        <div style={{ padding: "2em", alignSelf: "center" }}>
          <Image
            style={{ margin: "0 auto", borderRadius: "50%" }}
            src={picture}
          />
        </div>
        <h3>
          Full name: {user.name.firstname} {user.name.lastname}{" "}
          <h4
            style={{ color: "blue", cursor: "pointer", display: "inline" }}
            onClick={() => toast.success("changed")}
          >
            change
          </h4>
        </h3>
        <h3>
          Address: {user.address.city}/{user.address.street}/
          {user.address.number}
          <h4
            style={{ color: "blue", cursor: "pointer", display: "inline" }}
            onClick={() => toast.success("changed")}
          >
            change
          </h4>
        </h3>

        <h3>
          Email:{user.email}{" "}
          <h4
            style={{ color: "blue", cursor: "pointer", display: "inline" }}
            onClick={() => toast.success("changed")}
          >
            change
          </h4>
        </h3>
        <h3>
          Username: {user.username}{" "}
          <h4
            style={{ color: "blue", cursor: "pointer", display: "inline" }}
            onClick={() => toast.success("changed")}
          >
            change
          </h4>
        </h3>
      </div>
    </div>
  );
}
