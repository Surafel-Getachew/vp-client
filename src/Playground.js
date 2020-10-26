import React,{useContext,useEffect} from "react";
import ArticleContext from "./context/article/articleContext";


const Playground = () => {

   const articleContext = useContext(ArticleContext);
   const {articles,loadArticle} = articleContext

    useEffect(() => {
       loadArticle();
    },[])

    return(
        <div>
            {articles.map((article) => (
                <div>
                    <h1>{article.title}</h1>
                    <p>{article.body}</p>
                </div>
            ))}
        </div>
    )   
    
}

export default Playground;