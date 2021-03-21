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
  var url = document.getElementById("article-url").value;
  var check = checkURL(url);
  if (check) {
    post("http://localhost:8081/add-url", { url }).then((res) => {
      if (res.msg) {
        alert(res.msg);
      } else {
        console.log(res);
        document.getElementById("text").innerHTML = res.text;
        document.getElementById("agreement").innerHTML = res.agreement;
        document.getElementById("subjectivity").innerHTML = res.subjectivity;
        document.getElementById("confidence").innerHTML = res.confidence;
        document.getElementById("irony").innerHTML = res.irony;
        document.getElementById("score_tag").innerHTML = res.score_tag;
      }
    });
  } else {
    alert("The url is not valid");
  }
};

export default handleSubmit;
