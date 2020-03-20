import React,{useState,useContext,useEffect} from "react";

import ArticleContext from "../../../context/article/articleContext";
import ArticleItems from "./Components/ArticleItems"

const PAlert = () => {

    const articleContext = useContext(ArticleContext);
    const {addArticle,articles,loadPsychiatristArticles,current,updateArticle,clearCurrent} = articleContext;
    
    const [article,setArticle] = useState({
        title:"",
        body:"",
        
    })

    const {title,body} = article;

    useEffect(() => {
       loadPsychiatristArticles();
    },[])

    useEffect(() => {
        if(current !== null){
            setArticle(current)
        }
        else {
            setArticle({title:"",body:""})
        }
    },[articleContext,current])

    const onChange = (e) => {
        setArticle({...article,[e.target.name]:e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(current == null){
            addArticle({title,body});
        }
        else{
            updateArticle(article)
        }
        
        clearCurrent();
    }

    // const clearAll =  (current) => {
    //     clearCurrent();
    // }

    return (
        <div>
            <form onSubmit = {onSubmit}>
                <label>Title</label> <br/>
                <input type = "text" name = "title" value = {title} onChange = {onChange} placeholder = "title"/><br/>
                <label>body</label><br/>
                <textarea type = "text" name = "body" value = {body} onChange = {onChange} placeholder = "body" rows = "20" cols = "90" />
                <input type = "submit" value = "post" />
            </form>
            
            <div>
            {articles.map((article) => (
                <div key = {article._id}>
                    <ArticleItems articles = {article} />
                </div>
            ))}
        </div>
               
            
        </div>
        
    )
}

export default PAlert;