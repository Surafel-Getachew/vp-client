import React,{useState,useEffect} from "react";
import axios from "axios"

const Article = () => {
    
    const [articles,setArticle] = useState([]);

    useEffect(() => {
        axios.get("/vp").then((res) => {
            setArticle(res.data);
        })
    })

    return(
        <div>
            {articles.map((article) => (
                <ul>
                    <li>{article.title}</li>
                </ul>
            ))}
        </div>
    )
}

export default Article;