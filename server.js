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

  socket.on("upload events json", (data) => {
    fs.writeFile("public/json/events.json", data, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  });

  socket.on("get events json", (data) => {
    fs.readFile("public/json/events.json", (err, data) => {
      if (err) throw err;
      socket.emit("return events json", JSON.parse(data));
    });
  });
});
