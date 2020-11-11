import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

const Form = styled(Unform)`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input {
    width: 25%;
    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
  }

  textarea {
    width: 25%;

    margin-bottom: 15px;
    padding: 12px 16px;
    border-radius: 4px;
    border: 2px solid #ddd;
    font-size: 15px;
    color: #444;
    transition: border-color 0.2s;
    resize: both;
  }

  input:focus {
    border-color: #111;
  }

  button {
    display: block;
    background: #111;
    color: #fff;
    border: 0;
    cursor: pointer;
    border-radius: 4px;
    width: 25%;
    padding: 16px;
    font-weight: bold;
    font-size: 15px;
    transition: background-color 0.2s;
    :hover {
      background-color: var(--primary-color);
    }
  }
`;
export default Form;
