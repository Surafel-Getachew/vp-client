import React, { useEffect, useContext, useState } from "react";
import { connect } from "react-redux";
import { loadPsychBasicProfile } from "../../Redux/PsychProfile/psych_profile_aciton";
import ArticleContext from "../../context/article/articleContext";
import styles from "./publicArticle.module.css";
const PublicArticle = (props) => {
  const [articleInfo, setArticleInfo] = useState();
  const articleContext = useContext(ArticleContext);
  const { getArticleById, article } = articleContext;
  const articleId = props.match.params.articleId;
  const { loadPsychBasicProfile, psychBasicProfile } = props;
  console.log("article id", props.match.params.articleId);
  useEffect(() => {
    getArticleById(articleId);
  }, [articleId]);

  useEffect(() => {
    if (article !== null) {
      loadPsychBasicProfile(article.owner);
    }
  }, [article]);
  function createMarkup(markup) {
    return {
      __html: markup,
    };
  }
  return (
    <div>
      {article === null ? (
        "Loading"
      ) : (
        <div className={styles.articleCnt}>
          <div className={styles.writerProfileCnt}>
            {psychBasicProfile == null ? (
              "LOADING"
            ) : (
              <div className={styles.writerProfile}>
                <p>WRRITEN BY:</p>
                {/* <img src={require("../../assets/doctor-thumb-02.jpg")} alt="" /> */}
                <img
                  src={`data:image/jpeg;base64,${psychBasicProfile.avatar}`}
                  alt=""
                />
                <h4>{psychBasicProfile.name}</h4>
              </div>
            )}
          </div>
          <div className={styles.articleContentCnt}>
            <div className={styles.articleContentCenter}>
              <div className={styles.articleHeader}>
                <h3>{article.articleTag}</h3>
                <h1>{article.title}</h1>
                {psychBasicProfile == null ? ("LOADING"):(
                  <p>By: {psychBasicProfile.name}</p>
                )}
                <p>Published 3 Years Ago</p>
              </div>
              <div className={styles.articleImage}>
                <img src={require("../../assets/family1.jpg")} alt="family" />
              </div>
              <div className={styles.articleBody}>
                <p dangerouslySetInnerHTML={createMarkup(article.body)}>
                  {/* If you have never heard of SailsJS before, your happy to read
                  this post now. If you already heard about it, you should still
                  follow this as we will see Sails in action later in this post,
                  and how fast we can develop a simple API with Sails. But first
                  things first. What is SailsJS? Sails is a Webframework, based
                  on NodeJS and Express. Why should you consider using Sails?
                  Because Sails rock. Well, especially if you like to get things
                  done FAST, you should have a closer look at Sails. You might
                  have never got a REST API up and running in the speed of
                  Sails. More points for Sails: Completely JavaScript, no fancy
                  other language to learn REST API Blueprints for faster
                  development Security policies by default Compatible with all
                  the Frontend stuff you like (AngularJS, Bower…) Grunt as
                  buildsystem, so you can run all your tasks you already have If
                  we can trust their developers, Sails sounds very awesome.
                  Sails is the most popular MVC framework for Node.js. It is
                  designed for building practical, production-ready Node.js apps
                  in a matter of weeks — not months. — SailsJS All this sounds
                  quite good, but let’s see how Sails performs in the real world
                  (not the one on marketing pages). Lift your Sails To install
                  sails, you need to have node installed. Then simply run from
                  your command line: */}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  psychBasicProfile: state.psychProfile.psychBasicProfile,
});

export default connect(mapStateToProps, {
  loadPsychBasicProfile,
})(PublicArticle);

// export default connect({
//   loadPsychBasicProfile
// })(PublicArticle);
