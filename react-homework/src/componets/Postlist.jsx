import { useState } from "react";
import Post from "./componets/Post"

const Postlist = function (posts) {
    return(
        <div className = 'postlist'>
          <h1>POSTS</h1>
            {{posts}.map(post =>
            <Post post = {post}/>
      )}
        </div>
    )
}

export default Postlist