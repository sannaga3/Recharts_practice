import { memo, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Card } from '../atoms/card/Card'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { ComposedChart2 } from '../atoms/chart/ComposedChart2'

export const Posts = memo(() => {
  const [posts, setPosts] = useState([]);
  const [postCountList, setPostCountList] = useState([]);
  const [chartToggle, setChartToggle] = useState(false);

  const onClickFetchData = () => {
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
  return (
    <>
      <SRow>
        <PrimaryButton onClick={ onClickFetchData }>データ取得</PrimaryButton>
      </SRow>
      {
        chartToggle ? (
          <SRow>
            <ComposedChart2 postCountList={ postCountList } />
          </SRow>
        ) : ""
      }
      <hr/>
      <div>
        { posts.map((post) => (
          <Card key={ post.id } userId={ post.userId } id={ post.id } title={ post.title } body={ post.body } />
        ))}
      </div>
    </>
  );
})

const SRow = styled.div`
  color: #504c4c;
  display: flex;
  flex-direction: Row;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`