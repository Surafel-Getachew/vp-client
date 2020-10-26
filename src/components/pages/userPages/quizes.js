import React from "react";
import axios from "axios";

const Quizes = () => {
  //  const article = [{id:0,title:"FirstChapter",body:"aboutFirst"},{id:1,title:"secondChapter",body:"aboutSecond"}]
  const article = axios.get("http://localhost:6000/vp");
  const articles = article.data;

  const some = axios.get("/vp").then((res) => {
    return res;
  });

  return (
    <div>
      {some.data.map((art) => (
        <ul>
          <li>{art.title}</li>
        </ul>
      ))}
    </div>
  );
};

export default Quizes;

// const result = await axios.get("http://localhost:6000/vp");
// const data = [{id:0,title:"FirstChapter",body:"aboutFirst"},{id:1,title:"secondChapter",body:"aboutSecond"}]
