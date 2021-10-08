import { useState } from 'react'
import axios from 'axios'

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [postCountList, setPostCountList] = useState([]);
  const [chartToggle, setChartToggle] = useState(false);

  const getPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        setPosts(res.data);
        const userIds = res.data.map((post) => post.userId)
        const userIdList = Array.from(new Set(userIds))
        const userIdCountList = userIdList.map((userId) => [userId, 0])
        userIds.map((userId) => {
          if (userIdList.includes(userId)) {
            userIdCountList[userId - 1][1] += 1
          }
        })
        setPostCountList(userIdCountList)
        setChartToggle(true)
      })
      .catch((error) => {
        alert(error)
      })
    }
    return { getPosts, posts, postCountList, chartToggle };
}