import React,{useContext} from "react"

import ArticleContext from "../../../../context/article/articleContext";

const ArticleItems = ({articles}) => {
    const articleContext = useContext(ArticleContext);
    const {deleteArticle,updateArticle,setCurrent} = articleContext;

    const {_id,title,body} = articles

    const onDelete = () => {
        deleteArticle(_id);
    }

    const onEdit = () => {
        setCurrent(articles)
    }
    
    return (
        <div>
            <h1>{title}</h1>
            <p>{body}</p><br/>
            <button onClick = {onEdit}>Edit</button> <button onClick= {onDelete} >Delete</button>
        </div>
    )
}

export default ArticleItems;