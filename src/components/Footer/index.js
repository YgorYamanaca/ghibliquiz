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

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.mainBg};
  padding: 20px;
  display: flex;
  align-items: center;
  border-radius: 4px; 
  border: 2px solid ${({ theme }) => theme.colors.contrastText};
  img {
    width: 58px;
    margin-right: 23px;
  }
  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &:focus {
      opacity: .65;
    }
    span {
      text-decoration: underline;
    }
  }
  animation: ${show} 1.5s ease-out none;
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
