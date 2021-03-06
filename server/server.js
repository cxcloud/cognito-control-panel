const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const routes = require("./routes.js");

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));

    server.use("/api", routes);
<<<<<<< HEAD
    server.use("/user/create", (req, res) => {
      return app.render(req, res, "/user/create");
    });
    server.get("/user/:username", (req, res) => {
      return app.render(req, res, "/user/edit", {
        username: req.params.username
      });
=======
    server.get("/user/:username", (req, res) => {
      return app.render(req, res, "/user", { username: req.params.username });
>>>>>>> 9390d639f03892ea70b2cd0ca83039fc7da8ecdc
    });
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log(`Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
