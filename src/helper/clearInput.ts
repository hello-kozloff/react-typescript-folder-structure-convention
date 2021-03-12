import { css } from 'styled-components';

const clearInput = css`
  outline: none;
  resize: none;
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  color: inherit;
  
  &:focus::placeholder {
    opacity: 0;
  }
`;

export default clearInput;