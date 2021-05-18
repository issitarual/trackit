import { useState } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import Loader from "react-loader-spinner";
import Image from '../../images/logo.png';



export default function Register(){

    const [email,setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [name, setName] = useState ("");
    const [image, setImage] = useState ("");
    const [loading, setLoading] = useState(false);
    

    let history = useHistory();

    const body= {
        email,
        name,
        image,
        password
    }

    return(
        <>
        <DivLogo>
           <Logo src={Image}/> 
        </DivLogo>
        <Data>
            <Input disabled = {loading} type="text" placeholder="email" onChange={e => setEmail(e.target.value)}></Input>
            <Input disabled = {loading} type="password" placeholder="senha" onChange={e => setPassword(e.target.value)}></Input>
            <Input disabled = {loading} type="text" placeholder="nome" onChange={e => setName(e.target.value)}></Input>
            <Input disabled = {loading} type="text" placeholder="foto" onChange={e => setImage(e.target.value)}></Input>
            <Button disabled = {loading} onClick={() => {
                const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
                setLoading(true);
                request.then(response => history.push("/"));
                request.catch(error => {
                    alert("Erro! Preencha novamente os campos.")
                    setLoading(false);
                })
                }}>
                    {loading === true? "": "Cadastrar"}
                    <Loader visible ={loading} type="ThreeDots" color="#FFF" height={80} width={80} /> 
            </Button>
        </Data>
        <Link to="/">
            <Login>Já tem uma conta? Faça login!</Login>
        </Link>
        </>
    )
}

const DivLogo = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    margin-top: 68px;
`

const Logo = styled.img`
    width: 180px;
    height: 180px;
`;

const Input = styled.input`
    height: 45px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    color: #AFAFAF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 6px;
    ::-webkit-input-placeholder  { 
        color: #DBDBDB; 
        padding: 11px;
    }
`;


const Data = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 36px;
`;

const Button = styled.div`
    cursor: pointer;
    height: 45px;
    font-size: 21px;
    font-family: 'Lexend Deca', sans-serif;
    color: #fff;
    background-color: #52B6FF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Login = styled.p`
    cursor: pointer;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 14px;
    color: #52B6FF;
    text-decoration-line: underline;
    text-align: center;
    margin-bottom: 30px;
`