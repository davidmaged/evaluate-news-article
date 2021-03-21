const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
var bodyParser = require("body-parser");
const axios = require("axios");

const mockAPIResponse = require("./mockAPI.js");

const PORT = 8081;

dotenv.config();

// console.log(`Your API key is ${process.env.API_KEY}`);

const BASE_API_URL = "https://api.meaningcloud.com/sentiment-2.1";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("dist"));

app.get("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.post("/add-url", async (req, res) => {
  try {
    axios
      .post(
        `${BASE_API_URL}?key=${process.env.API_KEY}&url=${req.body.url}&lang=en`
      )
      .then(
        (response) => {
          // console.log(response);
          //   res.send(response.data);
          if (response.data.status.code === "0") {
            let data = response.data;
            let output = {
              text: data.sentence_list[0].text,
              score_tag: data.score_tag,
              agreement: data.agreement,
              subjectivity: data.subjectivity,
              confidence: data.confidence,
              irony: data.irony,
            };
            // console.log(output);
            res.status(200).send(output);
          } else {
            var msg = response.data.status.msg;
            res.status(response.data.status.code).send({ msg });
          }
        },
        (error) => {
          res.send(error.message);
        }
      );
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

app.listen(PORT, (error) => {
  if (error) throw new Error(error);
  console.log(`Server listening on port ${PORT}!`);
});

module.exports = app;
