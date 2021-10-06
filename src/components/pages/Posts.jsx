import { memo, useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { Card } from '../atoms/card/Card'
import { PrimaryButton } from '../atoms/button/PrimaryButton'

export const Posts = memo(() => {
  const [posts, setPosts] = useState([]);

  const onClickFetchData = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
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
      <div>
        { posts.map((post) => (
          <Card key={ post.id} userId={ post.userId } id={ post.id } title={ post.title } body={ post.body } />
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