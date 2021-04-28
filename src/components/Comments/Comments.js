import React from 'react';


const Comments = (props) => {
    const {name,body} = props.comment;
    return (
        <div className="comment-section">
          <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDqpIXD9Yt2_LUz11hHVwEwEZbwkbhouCbA&usqp=CAU" alt=""/>
          </div>
          <div className="comment-body">
              <a href="">{name.slice(0,9)}</a>
              <p>{body}</p>
          </div>
        </div>
    );
};

export default Comments;