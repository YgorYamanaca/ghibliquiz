import styled from 'styled-components'

const Input = styled.input.attrs({type: 'text'})`
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

export default function CustomButton({ placeHolder }) {
    return (
        <Input placeholder={placeHolder}/>
    );
}