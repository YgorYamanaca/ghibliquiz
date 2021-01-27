import styled from 'styled-components';

const Widget = styled.div`
  display:flex;
  flex-direction:column;
  margin-top: 24px;
  margin-bottom: 24px;
  border: 2px solid ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
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
  padding: 24px 32px 32px 32px;
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

Widget.Input = styled.input`
    display:flex;
    justify-content:center;
    align-items:center;
    height:38px;
    width:80%;
    background-color: ${({ theme }) => theme.colors.mainBgAlpha};
    color: ${({ theme }) => theme.colors.contrastText};
    padding:5px 10px;
    border: 0;
    margin-top:33px;
`;

Widget.Button = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    height:36px;
    width:80%;
    background-color: ${({ theme }) => theme.colors.primary};
    color:${({ theme }) => theme.colors.contrastText};
    cursor: ${(props) => !props.disabled && 'pointer'};
    opacity: ${(props) => props.disabled && 0.5};
    border:0;
    :hover
    {
        border: 1px solid ${({ theme }) => theme.colors.contrastText};
        border-color: ${(props) => props.disabled && 'transparent'};
    }
    margin-top:25px;
    user-select: none;
`;

export default Widget;
