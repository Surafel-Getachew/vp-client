import React,{useContext,useEffect} from "react";
import ArticleContext from "../../../context/article/articleContext"
import ArticleItem from "../../article/ArticlesItem"; 

const Article = () => {
    
    const articleContext = useContext(ArticleContext);
    const {articles,loadArticle} = articleContext;

    useEffect(() => {
        loadArticle();
    },[])

    return (
       <div>
           {articles.map((article) => (
               <div id = {article._id}>
                    {/* <h1>{article.title}</h1>
                    <p>{article.body}</p>*/}
                    <ArticleItem title = {article.title} body = {article.body} />
               </div>
           ))}
       </div>
   )
}

export default Article;