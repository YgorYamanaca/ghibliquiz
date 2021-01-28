import styled, { keyframes } from 'styled-components';

const Widget = styled.div`
  display:flex;
  flex-direction:column;
  margin: 24px 0;
  border: 2px solid ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 17px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 15px;
    font-weight: 400;
    line-height: 1.25;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  text-align:center;
  padding: 24px 32px 24px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  form {
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
  }
`;

Widget.Button = styled.button`
  display:flex;
  justify-content:center;
  align-items:center;
  height:36px;
  width:80%;
  font-size:15px;
  background-color: ${({ theme }) => theme.colors.primary};
  color:${({ theme }) => theme.colors.contrastText};
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
  opacity: ${(props) => props.disabled && 0.5};
  border:0;
  :hover
  {
      border: 1px solid ${({ theme }) => theme.colors.contrastText};
      border-color: ${(props) => props.disabled && 'transparent'};
  }
  margin-top:25px;
  user-select: none;
  border-radius:6px;
`;

const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0deg);
  }
`;

Widget.Animationcontainer = styled.div`
  position: relative !important;
  img {
    height:150px;
    width:150px;
    border-radius: 50%;
  }
  .spinner1 {
    height: 155px;
    width: 155px;
    position: absolute !important;
    left: 50%;
    margin-left: -75px;
    top: 50%;
    margin-top: -80px;
    z-index: 100 !important;
    border-radius: 50%;
    border-width: 5px;
    border-style: solid;
    border-color: #fff transparent transparent transparent;
    animation: ${rotate} 1s linear infinite;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-align:center;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block;
  width:100%;
  &:hover,
  &:focus {
    opacity: .5;
  }

  & >  input{
    margin-right:15px;
  }
`;

export default Widget;
