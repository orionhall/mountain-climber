import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  height: 3rem;
  border: none;
  padding: 1rem 2rem;
  margin: 0;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  line-height: 1;
  cursor: pointer;
  text-align: center;

  &:focus {
    background: #0053ba;
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:hover {
    background: #0053ba;
  }
`;

export default Button;
