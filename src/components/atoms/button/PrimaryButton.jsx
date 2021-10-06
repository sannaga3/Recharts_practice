import styled from 'styled-components';
import { BaseButton} from './BaseButton.jsx';

export const PrimaryButton = (props) => {
  const { children, onClick } = props;

  return (
    <PButton onClick={ onClick }>{ children }</PButton>
  );
}

const PButton = styled(BaseButton)`
  width: 150px;
  background-color: #08a0bb;
`