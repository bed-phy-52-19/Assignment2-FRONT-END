import { Link } from 'react-router-dom';
import { Send } from '@material-ui/icons'
import styled from 'styled-components'
import { mobile } from '../rensponsive';

const Container = styled.div`
  height : 60vh;
  background-color:#fcf5f5;
  display: flex;
  align-items: center;
  justify-content:center;
  flex-direction: column;
`;
const Title = styled.h2`
font-size : 70px;
margin-bottom:20px;

`;
const Descri = styled.div`
 font-size:25;
 font-weight:300;
 margin-bottom:18px;
 ${mobile({textAlign:"center"})}
`;
const Inputcont = styled.div`
width:40%;
height:8%;
background-color:white;
display:flex;
justify-content:space-between;
border:1px solid lightgray;
${mobile({width:"80%"})}
`;
const Input = styled.input`
border:none;
flex:8;
padding-left: 20px;
`;
const Button = styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title >News letter</Title>
        <Descri>Get update from your favourite products</Descri>
        <Inputcont>
        <Input placeholder='Your feedback'/>
        <Button><Link to="google.com"><Send/></Link></Button>
        </Inputcont>
    </Container>
  )
}

export default Newsletter