import express, { Application } from "express";
import bodyParser from "body-parser";
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("Hello");
});

const port = 3000;

app.listen(port, () => {
  console.log("Server is running at port " + port);
});
