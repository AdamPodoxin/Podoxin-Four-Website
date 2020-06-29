const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const socketIO = require("socket.io");
const fs = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PORT = process.env.PORT || 5000;
const Event = mongoose.model(
  "event",
  new Schema({
    data: {
      type: String,
      required: true,
    },
  })
);

const app = express();

const server = app
  .use(express.static("public"))
  .listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(bodyParser.json());

app.use(
  "/api/events",
  (router.get("/", (req, res) => {
    Event.find().then((event) => {
      console.log(event);
      res.json(event);
    });
  }),
  router.post("/", (req, res) => {
    console.log(req.body);
    const newEvent = new Event({
      data: req.body.data,
    });

    newEvent.save().then((event) => {
      res.json(event);
    });
  }))
);

let io = socketIO(server);

const mongoURI =
  "mongodb+srv://AdamPodoxin:PodGaming1107@cluster-main-ycagi.mongodb.net/Podoxin-Four-Website?retryWrites=true&w=majority";

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

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
