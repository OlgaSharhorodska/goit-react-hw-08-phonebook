import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 500px;
  padding: 20px 15px;
  border-radius: 8px;
  background-color: #fff;
  gap: 10px;

  label {
    font-weight: 500;
    margin-bottom: 5px;
  }
  /* input{
    font-size: 15px;
    width: 250px;
    height: 26px;
    margin-bottom: 30px;
    outline: none;   
    margin-right: 10px; */

  /*    
    &:focus{
        outline: 1px solid rgba(0, 255, 255);
    } */

  /* }   */

  button {
    width: max-content;
    border-radius: 5px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2), 1px 1px 3px rgba(0, 0, 0, 0.2);
  }
`;
export const FieldEl = styled(Field)`
  outline: none;
  height: 60px;
  margin-right: 10px;
  width: 250px;
`;
