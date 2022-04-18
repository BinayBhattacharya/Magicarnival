import React from 'react'
import './/Blog.css'
import { useEffect} from "react";
const Blog = () => {
  useEffect(() => {
    document.title = "Blogs | Magicarnival"
  }, [])
    return (
        <div>
        Blogs<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
}

export default Blog