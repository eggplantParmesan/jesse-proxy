require("newrelic");
require("dotenv").config();
// const client = require("../component-sonia/server/redis.js");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const fetch = require("node-fetch");
const proxy = require("express-http-proxy");

app.use(morgan("dev"));
app.use("/:id", express.static(path.join(__dirname, "public")));
app.use("/product", proxy("http://localhost:4043"));

// // AVH
// app.get("/api/reviews/:productId", (req, res) => {
//   fetch(
//     `http://ec2-54-193-70-8.us-west-1.compute.amazonaws.com:80/reviews/${
//       req.params.productId
//     }`
//   )
//     .then(res => {
//       return res.json();
//     })
//     .then(json => res.send(json));
// });

// // AVH
// app.get("/api/helpful/:productId", (req, res) => {
//   fetch(
//     `http://ec2-54-193-70-8.us-west-1.compute.amazonaws.com:80/helpful/${
//       req.params.productId
//     }`
//   )
//     .then(res => {
//       // do nothing
//     })
//     .then(json => res.status(202).send());
// });

// // Matt
// app.get("/api/checkout/:productId", (req, res) => {
//   fetch(
//     `http://ec2-18-224-5-50.us-east-2.compute.amazonaws.com:80/checkout/${
//       req.params.productId
//     }`
//   )
//     .then(res => {
//       return res.json();
//     })
//     .then(json => res.send(json));
// });

// Sonia
// http://ec2-13-57-246-165.us-west-1.compute.amazonaws.com:3036/?id=1
// app.get("/product", (req, res) => {
//   console.log(req.params);
//   var id = req.params.id;
//   fetch(`http://localhost:4043/product/${id}`)
//     .then(res => {
//       // console.log(res);
//       return res.json();
//     })
//     .then(json => res.send(JSON.stringify(json)));
// });

// // Michelle
// // http://ec2-13-57-32-246.us-west-1.compute.amazonaws.com/?id=2
// app.get("/api/products/", (req, res) => {
//   fetch(
//     `http://ec2-13-57-32-246.us-west-1.compute.amazonaws.com:80/get?id=${
//       req.query.id
//     }`
//   )
//     .then(response => {
//       return response.json();
//     })
//     .then(json => {
//       res.send(json);
//     });
// });

app.listen(port, () => {
  console.log(`proxy server listening on port ${port}...`);
});
