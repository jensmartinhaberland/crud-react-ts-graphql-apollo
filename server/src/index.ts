import express from "express";
import {schema} from "./Schema";
import cors from "cors";
import {createConnection} from "typeorm";
import {graphqlHTTP} from "express-graphql";
import {Users} from "./Entities/Users";

// @ts-ignore
const main = async () => {
  await createConnection({
    type: "mysql",
    database: "crud_tutorial",
    username: "root",
    password: "",
    logging: true,
    synchronize: false,
    entities: [Users],
  });

  /*await createConnection({
                      type: "postgres",
                      database: "crud-tutorial",
                      username: "postgres",
                      password: "<your_password>",
                      logging: true,
                      synchronize: false,
                      entities: [],
                    });*/

  const app = express();
  app.use(cors());
  app.use(express.json());
  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(3001, () => {
    console.log("SERVER RUNNING ON PORT 3001");
  });
};

main().catch((err: any) => {
  console.log(err);
});
