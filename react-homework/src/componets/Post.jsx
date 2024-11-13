import { useState } from "react";

const Post = function (props) {
    return(
        <div className = 'post'>
          <div className = 'postContent'>
            <strong>{props.post.title}</strong>
            <div>
              {props.post.body}
            </div>
          </div>
          <div className = 'post_btns'> 
              <button>Удалить пост</button>
          </div>
        </div>
    )
}

export default Post