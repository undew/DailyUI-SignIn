import React from 'react';
import styled from 'styled-components';
import '../css/css.css';
import Back from '../img/back.svg';
import Form from './Form.jsx';
/* style */

const Container = styled.div`
height:100vh;
    text-align: center;
`;

const Main = styled.div`
    padding-top:${props => props.height ? '232px' : '96px'};
    transition:0.3s;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const SubTitle = styled.p`
    padding-top: 32px;
    font-size: 16px;
`;

const Img = styled.img`
    padding-top: 32px;
    width:161px;
`;

const SignIn = styled.div`
    margin-top: ${props => props.height ? '180px' : '53px'};
    height:500px;
    width:100%;
    background-color: #125D98;
    color:#FFF;
    border:#125D98;
    border-top-left-radius:50% 75px;
    border-top-right-radius:50% 75px;
    filter:drop-shadow(0px -1px 12px rgba(255,255,255,0.04));
    filter:drop-shadow(0px -4px 8px rgba(255,255,255,0.08));
    filter:drop-shadow(0px -1px 12px rgba(255,255,255,0.4));
    transition:0.3s;
    .button{
        width:100%;
    }
`;

const FormTitle = styled.p`
    padding: 48px 0px;
    font-size: 24px;
`;
/* style */


function App() {
    const [height, setHeight] = React.useState(true);

    const handleClick = () => {
        setHeight(height ? false : true);
    }
    return (
        <Container>
            <Main height={height}>
                <Title>Undew</Title>
                <p><Img src={Back}/></p>
                <SubTitle>Hello,world</SubTitle>
            </Main>
            <SignIn height={height}>
                <FormTitle><button className='button' onClick={handleClick}>Sign In</button></FormTitle>
                <Form/>
            </SignIn>
        </Container>
        )
}

export default App;