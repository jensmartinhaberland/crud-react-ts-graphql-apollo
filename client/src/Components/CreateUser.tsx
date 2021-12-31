import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../Graphql/Mutation";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { error }] = useMutation(CREATE_USER);
  return (
    <div className="createUser">
      <input
        type="text"
        placeholder="name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button
        onClick={() => {
          createUser({
            variables: {
              name: name,
              username: username,
              password: password,
            },
          });
        }}
      >
        Create User
      </button>
    </div>
  );
};

export default CreateUser;
