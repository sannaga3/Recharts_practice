import { memo } from 'react'
import styled from 'styled-components'
import { Card } from '../atoms/card/Card'
import { PrimaryButton } from '../atoms/button/PrimaryButton'
import { ComposedChart2 } from '../atoms/chart/ComposedChart2'
import { usePosts } from '../../hooks/allPosts'

export const Posts = memo(() => {
  const { getPosts, posts, postCountList, chartToggle } = usePosts();
  const onClickFetchData = () => getPosts();

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