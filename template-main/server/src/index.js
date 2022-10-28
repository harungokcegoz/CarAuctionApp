import lotteries from "./routes/lotteriesRoute.js";
import users from "./routes/usersRoute.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());

app.use("/lotteries", lotteries);

app.use("/users", users);

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
