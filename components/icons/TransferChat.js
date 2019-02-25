import React from 'react';
import styled from 'styled-components';

export default function TransferChat() {
  return (
    <IconButton>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="13"><path fill="#00001E" fillOpacity=".6" fillRule="evenodd" d="M8.14 5.696a.51.51 0 0 1 0-.705l3.52-3.834a.423.423 0 0 1 .657 0l3.542 3.834a.51.51 0 0 1 0 .705l-.657.704a.423.423 0 0 1-.657 0l-1.102-1.2c-.188-.209-.516-.078-.516.235v7.043c0 .261-.211.522-.47.522h-.938c-.258 0-.47-.287-.47-.522V5.435c0-.313-.328-.444-.515-.235L9.43 6.4a.423.423 0 0 1-.657 0l-.633-.704zm-8 1.608L.775 6.6a.423.423 0 0 1 .657 0l1.103 1.2c.187.209.516.078.516-.235V.522C3.05.287 3.26 0 3.52 0h.937c.259 0 .47.26.47.522v7.043c0 .313.328.444.516.235l1.102-1.2a.423.423 0 0 1 .657 0l.657.704a.51.51 0 0 1 0 .705l-3.542 3.834a.423.423 0 0 1-.657 0L.14 8.01a.51.51 0 0 1 0-.705z"/></svg>
      <p>Transfer</p>
    </IconButton>
  )
}

const IconButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5px;
  cursor: pointer;
  svg {
    margin: 0;
  }
  p {
    margin: 4px 0 0;
    font-size: 12px;
    color: rgba(0, 0, 30, .6);
  }
`;
