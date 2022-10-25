const { Pool } = require("pg");
const { response } = require("express");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);

// const auth = require('./routes/auth');
const pool = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "HGCars",
});
//Routes//
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/cars", async (req, res) => {
  const rows = await readAllLotteries();
  res.setHeader("content-type", "application/json");
  res.send(JSON.stringify(rows));
});
app.get("/cars/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const rows = await readALottery(id);
    res.send(JSON.stringify(rows));
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});

start();

async function start() {
  await connect();
}

async function connect() {
  try {
    await pool.connect();
  } catch (e) {
    console.error(`Failed to connect ${e}`);
  }
}
async function readAllLotteries() {
  try {
    const results = await pool.query("select * from lottery");
    return results.rows;
  } catch (e) {
    return [];
  }
}
async function readALottery(id) {
  try {
    const results = await pool.query(
      "select * from lottery where lot_id = $1",
      [id]
    );
    return results.rows;
  } catch (e) {
    return "Something went wrong";
  }
}
// app.use("/auth", auth);

// app.get('/', (req, res) => {
//   console.log(req);
//   // res.send('Hello World!')
//   res.json({ msg: "hello world"});
// })
