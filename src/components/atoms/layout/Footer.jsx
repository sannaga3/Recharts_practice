import styled from 'styled-components'

export const Footer = () => {
  return (
    <>
      <SFooter>© 2021 tetsuya</SFooter>
    </>
  );
}

const SFooter = styled.footer`
  background-color: #6ca4da;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  position: fixed;
  bottom: 0px;
  width: 100%;
`