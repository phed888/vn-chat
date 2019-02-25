import styled from 'styled-components';

const PaneHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 40px 20px 20px;
  background-color: #fff;
  height: 80px;
  font-size: 16px;
  border-radius: 0 4px 0 0;
  &.customerChat {
    justify-content: space-between;
  }
  .custPOS {
    display: flex;
    align-items: center;
  }
  .title,
  .subtitle {
    padding: 0;
    margin: 0;
  }
  svg {
    margin-right: 8px;
  }
  .title {
    font-size: 16px;
    color: #00001e;
  }
  .subtitle {
    font-size: 12px;
    color: #00001e;
    opacity: 0.6;
    margin-top: 2px;
  }
`;

export default PaneHeader;
