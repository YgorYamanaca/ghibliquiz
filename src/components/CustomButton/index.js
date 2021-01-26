import styled from 'styled-components'

const Button = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    height:36px;
    width:80%;
    background-color: ${({ theme }) => theme.colors.primary};
    cursor:pointer;
    :hover
    {
        border: 1px solid ${({ theme }) => theme.colors.contrastText};
    }
    margin-top:25px;
`;

export default function CustomButton({ buttonText }) {
    return (
        <Button>
            {buttonText}
        </Button>
    );
}