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
  
  :hover {
    color: rgb(200, 1, 1);
    cursor: pointer;
    font-size: 17px;
  }
`;
