const { Pool } = require("pg");
const pool = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "postgres",
  database: "HGCars",
});

pool
  .connect()
  .then(() => {
    console.log("Connected succesfully");
  })
  .then(() => pool.query("SELECT * FROM lottery where lot_id = 1"))
  .then((results) => console.log(results.rows))
  .catch((e) => console.log)
  .finally(() => pool.end);
