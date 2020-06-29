const express = require("express");
const socketIO = require("socket.io");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const server = express()
  .use(express.static("public"))
  .listen(PORT, () => console.log(`Server started on port ${PORT}`));

let io = socketIO(server);
io.on("connection", (socket) => {
  socket.on("get gallery images", (data) => {
    fs.readdir("public/img/gallery/", (err, files) => {
      socket.emit("return gallery images", files);
    });
  });
});
