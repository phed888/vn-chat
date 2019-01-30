import styled from 'styled-components';

const ChatPane = styled.div`
  background-color: ${props => props.BGColor};
  display: grid;
  grid-template-rows: 80px auto 85px;
  align-content: stretch;
`;

export default ChatPane;
