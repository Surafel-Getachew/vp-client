import React from "react";

const ArticlesItem = ({title,body}) => {

    return(
        <div>
           <h1>{title}</h1>
           <p>{body}</p>
        </div>
    )
}

export default ArticlesItem;