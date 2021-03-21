import "babel-polyfill";
import formHandler from "../js/formHandler";
const $ = require("jquery");

describe("Client Test", () => {
  test("Testing the handleSubmit function defined or not", () => {
    expect(formHandler.handleSubmit).toBeDefined();
  });

  test("Testing the post method to return data", () => {
    var url = "https://jamesclear.com/getting-simple";
    formHandler.post("http://localhost:8081/add-url", { url }).then((res) => {
      expect(res.text).toBe("Books Articles Newsletter Events");
    });
  });
});
