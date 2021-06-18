import styled from "styled-components";

export const Tr = styled.tr`
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
  @media (max-width: 600px) {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.65em;
  }
`;

export const Td = styled.td`
  padding: 0.62em;
  text-align: center;
  @media (max-width: 600px) {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
    &::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    &:last-child {
      border-bottom: 0;
    }
  }
`;

export const Button = styled.button`
  background-color: #9c0000;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  transition: 0.3s;
  font-weight: 600;
  border: 1px solid #9c0000;
  &hover {
    color: #9c0000;
    background-color: #fff;
  }
`;
