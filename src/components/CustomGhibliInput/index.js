import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display:relative;
  justify-content:center;
  align-items:center;
  width:80%;
  height:38px;
  background-color: ${({ theme }) => theme.colors.contrastText};
  padding:0 10px;
  margin-top:25px;
  border-radius:6px;
  & > input {
    width:100%;
    height:38px;
    outline:0;
    border:0;
    background-color:transparent;
    color: ${({ theme }) => theme.colors.mainBg};
    font-size:15px;
  }
`;

export default function CustomGhibliInput({ placeholder, onChange, value }) {
  return (
    <InputContainer>
      <input
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </InputContainer>
  );
}
