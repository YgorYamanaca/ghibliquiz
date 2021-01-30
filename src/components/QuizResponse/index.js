import React from 'react';
import styled, { keyframes } from 'styled-components';
import Lottie from 'react-lottie';
import successAnimationData from './success.json';
import errorAnimationData from './error.json';

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
    align-items:center;
    margin-top:20px;
    border: 1px solid ${(props) => (props.isRight ? 'green' : 'red')};
    border-radius:6px;
    padding: 10px;
    animation: ${show} 3s ease none;
    & > .animationDiv {
      width:40px;
      height:40px;
    }

    & > .responseText {
      animation: ${show} 3s ease none;
    }
`;

const defaultSuccessOptions = {
  loop: false,
  autoplay: true,
  animationData: successAnimationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const defaultErrorOptions = {
  loop: false,
  autoplay: true,
  animationData: errorAnimationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function QuizResponse({ nameOfUser, isRight, answer }) {
  return (
    <Container isRight={isRight}>
      <div className="responseText">
        {isRight
          ? `${nameOfUser}, você acertou a questão!`
          : `${nameOfUser}, você errou, a opção correta é ${answer} !`}
      </div>
      <Lottie
        className="animationDiv"
        options={isRight ? defaultSuccessOptions : defaultErrorOptions}
        height={50}
        width={50}
      />
    </Container>
  );
}
