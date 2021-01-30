import styled, { keyframes } from 'styled-components';

const show = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
`;

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
  animation: ${show} 1s ease-out none;
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
    line-height: 2.5;
    text-align: center;
    border: 1px solid ${({ theme }) => theme.colors.contrastText};
    li.result_true {
      color: ${({ theme }) => theme.colors.success};
    }
    li.result_false {
      color: ${({ theme }) => theme.colors.wrong};
    }
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
  outline:0;
  :hover
  {
      border: ${(props) => !props.disabled && `1px solid ${props.theme.colors.contrastText}`};
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
  height:${(props) => props.externalData && '145px'};
  img {
    height:145px;
    width:145px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  .spinner1 {
    height: 150px;
    width: 150px;
    position: absolute !important;
    left: 50%;
    margin-left: -75px;
    top: 50%;
    margin-top: -80px;
    z-index: 100 !important;
    border-radius: 50%;
    border-width: 10px;
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.contrastText} transparent transparent transparent;
    animation: ${rotate} 1s ease infinite;
  }
`;

Widget.Topic = styled.div`
  display:flex;
  min-height:40px;
  justify-content:center;
  align-items:center;
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  padding: 5px 15px;
  margin-bottom: 8px;
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  width:100%;
  &:hover{
    ${(props) => !props.isSelected && !props.disabled && `
      opacity: .9;
      background-color: ${props.theme.colors.primary}};
      cursor: pointer;
    `}
    user-select: none;
  };
  background-color: ${(props) => props.selected && `${props.theme.colors.primary}`};
  border:${(props) => props.selected && `1px solid ${props.theme.colors.contrastText}`};
  user-select: none;
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
  opacity: ${(props) => props.disabled && 0.5};
`;

export default Widget;
