import React from "react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PsychNav from "../../../component/psychiatrist/PsychNav/PsychNav";
// import "./psychArticle.css";
import "./psychArticle.css";

const PsychArticle = () => {
  return (
    <div id="psych-article">
      <div className="psych-article-center">
        <PsychNav />
        <div className="psych-article-content">
          <div className="psych-article-form">
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              placeholder="title of the article"
              maxLength="300"
              tabIndex="100"
            />
            <br />
            <label htmlFor="body">Body</label>
            <br />
            <CKEditor
              editor={ClassicEditor}
              data = ""
              onInit={(editor) => {
                console.log("editor is ready to use", editor);
              }}
              onChange = {(e,editor) => {
                const data = editor.getData();

              }}
            ></CKEditor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PsychArticle;
