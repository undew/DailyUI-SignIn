import React from 'react';
import styled from 'styled-components';
import google from '../img/google.svg';
import twitter from '../img/twitter.svg';
import facebook from '../img/facebook.svg';
import soundCloud from '../img/soundcloud.svg';
import account from '../img/account.png';
import key from '../img/key.png';

const Others = [google,twitter,facebook,soundCloud];
const InputContainer = styled.div`
    margin: 0 auto;
    width:295px;
    
`;

const InputLabel = styled.p`
    padding:8px 0px;
`;

const Input = styled.input`

    padding-left: 40px;
    height:40px;
    width:100%;
    border: 1px solid #3C8DAD;
    border-radius:4px;
    background: #FFF;
    text-align: left;
    color:black;
`;

// backgroundを設定するためのconst
const act = {
    backgroundImage:`url(${account})`,
    backgroundSize: '24px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'left 8px center'
}

const k = {
    backgroundImage:`url(${key})`,
    backgroundSize: '24px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:'left 8px center'
}

const LoginBtn = styled.button`
    width:100%;
    text-align: right;
    button{
        margin-top:8px;
        padding:14px 16px;
        background-color: #F5A962;
        border:1px solid #F5A962;
        border-radius:4px;
        color:white;
    }
`;

const Other = styled.div`
    font-size: 12px;
    font-weight: 300;
    h3{
        padding-top: 16px;
    }
    ul{
        padding-top: 16px;
        display:flex;
        justify-content:center;
        li{
            padding:0 8px;
        }
    }
`;
const OtherImg = styled.img`
    width:24px;
`;


function Form() {
    const OtherList = Others.map((item) => 
        <li key={item}><OtherImg src={item} /></li>
    );
    console.log(OtherList);
    return (
        <>
        <InputContainer>
                <InputLabel><Input type="text" placeholder="Username" img={account} style={act}/></InputLabel>
                <InputLabel><Input type="password" placeholder="Password" img={key} style={k}/></InputLabel>
                <LoginBtn>
                    <button>LOG IN</button>
                </LoginBtn>
        </InputContainer>
        <Other>
                <h3>Log In as Other</h3>
                <ul>
                    {OtherList}
                </ul>
        </Other>
        </>
    )
}

export default Form;