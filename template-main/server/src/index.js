// const { Pool } = require("pg");
// const { response } = require("express");
// import { lotteries } from "./data/database";
import lotteries from "./routes/lotteries.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "*" }));

app.use(express.json());

// app.use(
//   cors({
//     origin: "*",
//   })
// );

app.use("/lotteries", lotteries);

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});

// // const auth = require('./routes/auth');
// const pool = new Pool({
//   host: "localhost",
//   user: "postgres",
//   port: 5432,
//   password: "postgres",
//   database: "HGCars",
// });
// //Routes//

// app.get("/lotteries", async (req, res) => {
//   const rows = await readAllLotteries();
//   res.setHeader("content-type", "application/json");
//   res.send(JSON.stringify(rows));
// });
// app.get("/cars/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const rows = await readALottery(id);
//     res.send(JSON.stringify(rows));
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// app.listen(3000, () => {
//   console.log(`Example app listening on port 3000`);
// });

// start();

// async function start() {
//   await connect();
// }

// async function connect() {
//   try {
//     await pool.connect();
//   } catch (e) {
//     console.error(`Failed to connect ${e}`);
//   }
// }
// async function readAllLotteries() {
//   try {
//     const results = lotteries;
//     return results.rows;
//   } catch (e) {
//     return [];
//   }
// }
// async function readALottery(id) {
//   try {
//     const results = await pool.query(
//       "select * from lottery where lot_id = $1",
//       [id]
//     );
//     return results.rows;
//   } catch (e) {
//     return "Something went wrong";
//   }
// }
// app.use("/auth", auth);

// app.get('/', (req, res) => {
//   console.log(req);
//   // res.send('Hello World!')
//   res.json({ msg: "hello world"});
// })
