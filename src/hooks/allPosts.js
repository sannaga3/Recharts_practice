import React, { useState } from 'react'
import axios from 'axios'

export const getPosts = () => {
  const [posts, setPosts] = useState([]);

  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log(res.data)
      const data = res.data.map((post) => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body
      }))
      setPosts(data)
    })
    .catch((error) => {
      alert('error')
    })
    return {getPosts};
}