import styled from 'styled-components';

export const HeaderS = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  padding: 25px 0 15px 0;
  font-weight: 600;
`;

export const Input = styled.input`
  padding: 10px;
  background-color: transparent;
  border: 1px solid rgb(148, 161, 178);
  color: rgb(148, 161, 178);
  text-align: center;
  outline: none;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const Paragraph = styled.p`
  display: flex;
  justify-content: space-between;
  width: 250px;
  margin: 10px;
`;

export const ButtonTrash = styled.button`
  background-color: transparent;
  border: none;
  color: red;
  font-size: 16px;
  transition: 0.2s;
  
  :hover {
    color: rgb(200, 1, 1);
    cursor: pointer;
    font-size: 17px;
  }
`;

export const FilterS = styled.form`
  display: flex;
  height: 60px;
  align-items: center;
`;

export const FilterNumeric = styled.section`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

export const Label = styled.label`
  width: 150px;
  align-self: center;
`;

export const Select = styled.select`
  background-color: transparent;
  color: rgb(148, 161, 178);
  border-color: transparent transparent rgb(148, 161, 178);
  outline: none;
  text-align: start;
  width: 115px;
  :hover {
    background-color: rgb(26, 26, 26);
    cursor: pointer;
  }
`;

export const InputFilter = styled.input`
  background-color: transparent;
  color: rgb(148, 161, 178);
  border: 1px solid rgb(148, 161, 178);
  border-radius: 8px;
  text-align: center;
  width: 140px;
  padding: 0;
`;

export const Button = styled.button`
  background-color: rgb(127, 90, 240);
  box-shadow: 0 3px 3px 0 rgb(1, 1, 1);
  color: rgb(255, 255, 254);
  transition: 0.2s;
  :hover {
    box-shadow: none;
    border: none;
    cursor: pointer;
  }
  :active {
    background-color: white;
  }
`;

export const Radio = styled.section`
  display: flex;
  flex-direction: column;
`;
