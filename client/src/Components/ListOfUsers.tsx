import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { GET_ALL_USERS } from "../Graphql/Queries";
import { DELETE_USER } from "../Graphql/Mutation";

const ListOfUsers = () => {
  const { data } = useQuery(GET_ALL_USERS);

  const [deleteUser, { error }] = useMutation(DELETE_USER);

  return (
    <div>
      {data &&
        data.getAllUsers.map((user: any) => {
          return (
            <div>
              {user.name} / {user.username}
              <button
                onClick={() => {
                  deleteUser({ variables: { id: user.id } });
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ListOfUsers;
