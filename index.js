import { createSSRApp } from "vue";
import { renderToString } from "vue/server-renderer";
import express from "express";

const server = express();
server.get("/", (req, res) => {
  const app = createSSRApp({
    data: () => ({
      count: 0,
    }),
    template: '<button @click="count++">{{count}}</button>',
  });

  renderToString(app).then((html) => {
    res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Muh Syahendra A</title>
        </head>
        <body>
            <div id="app">${html}</div>
        </body>
        </html>`);
  });
});

//routing dynamic
server.get("/:id", (req, res) => {
  const params = req.params.id;
  const app = createSSRApp({
    data: () => ({
      count: 0,
      params,
    }),
    template: '<button @click="count++">{{params}}</button>',
  });

  renderToString(app).then((html) => {
    res.send(`<!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Muh Syahendra A</title>
          </head>
          <body>
              <div id="app">${html}</div>
          </body>
          </html>`);
  });
});

server.get("/about", (req, res) => {
  const app = createSSRApp({
    data: () => ({
      count: 0,
    }),
    template: "<div>About</div>",
  });

  renderToString(app).then((html) => {
    res.send(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Muh Syahendra A</title>
            </head>
            <body>
                <div id="app">${html}</div>
            </body>
            </html>`);
  });
});

server.listen(3000, () => {
  console.log("listening on port 3000");
});
