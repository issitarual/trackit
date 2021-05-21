import styled from 'styled-components';

export default function CalendarClick ({ state, setstate, information }){
    return(
        <DayClick state = {state}>
            <div>
                <h2>Hábitos do dia {information[0]}</h2>
                <h3>{information[1]}</h3>
                <Close onClick={()=>setstate(!state)}>Fechar</Close>
            </div>
            
        </DayClick >
    )
}

const DayClick = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: red;
    display: ${props => props.state? "blocked" : "none"};
    position: fixed;
    background-color: rgba(255,255,255,0.7);
    z-index: 0;
    div{
        width: 90%;
        margin: auto;
        margin-top: 100px;
        padding: 13px 13px 17px 15px;
        background-color: #fff;
        border-radius: 5px;
    }
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 23px;
        color: #126BA5;
        margin-bottom: 10px;
    }
    h3{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #126BA5; 
    }

`

const Close = styled.div`
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    color: #52B6FF;
    text-align: center;
    margin-top: 10px!important;
`

