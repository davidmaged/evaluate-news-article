import checkURL from "./checkURL";
const post = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

const handleSubmit = async () => {
  /**
   * TODO
   *  - Get Value of the input for URL
   *  - Check if it's URL or not
   *      yes
   *          send it to the backend
   *      no
   *          show user message it's not valid URL
   */

  var url = document.getElementById("article-url").value;
  var check = checkURL(url);
  if (check) {
    post("http://localhost:8081/add-url", { url }).then((res) => {
      if (res.msg) {
        alert(res.msg);
      } else {
        console.log(res);
      }
    });
  } else {
    alert("The url is not valid");
  }
};

export default handleSubmit;
