import React from 'react';
import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin-top:20px;
    border: 1px solid ${(props) => (props.isRight ? 'green' : 'red')};
    border-radius:6px;
    padding: 10px;
    animation: ${show} 1s linear none;
`;

export default function QuizResponse({ nameOfUser, isRight, answer }) {
  return (
    <Container isRight={isRight}>
      <div>
        {isRight
          ? `${nameOfUser}, você acertou a questão!`
          : `${nameOfUser}, você errou, a opção correta é ${answer} !`}
      </div>
    </Container>
  );
}
