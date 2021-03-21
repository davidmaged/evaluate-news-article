import "babel-polyfill";
const request = require("supertest");
const app = require("../index");

describe("Server Test", () => {
  it("responds with json object according to the article", function (done) {
    request(app)
      .post("/add-url")
      .send({ url: "https://jamesclear.com/getting-simple" })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
