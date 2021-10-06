import styled from 'styled-components'

export const Card = (props) => {
  const { userId, id, title, body } = props;

  return (
    <SCard>
      <SDl>
        <dt>userID</dt>
        <dd>{ userId }</dd>
        <dt>ID</dt>
        <dd>{ id }</dd>
        <dt>title</dt>
        <dd>{ title }</dd>
        <dt>body</dt>
        <dd>{ body }</dd>
      </SDl>
    </SCard>
  )
}

const SCard = styled.div`
  background-color: #fff;
  min-width: 350px;
  box-shadow:  #ddd 0px 0px 4px 2px;
  border-radius: 10px;
  padding: 20px;
`
const SDl = styled.dl`
  text-align: left;
  margin-bottom: 0px;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`