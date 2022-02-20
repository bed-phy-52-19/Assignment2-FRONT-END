import { Link } from 'react-router-dom';
import styled from "styled-components"
import Footer from './Footer';

const Container = styled.div`width:100vw;
height:50vw;
background: url("eCommerce-online-shopping-india-1024x683.jpg") center;
 background-size:cover;
display:flex;
align-items:center;
justify-content: center;

`;
const Wrapper= styled.div`
width:25%;
padding:4px;
// background-color:white;
align-items:center;

`;
const Form = styled.form`
display:flex;
flex-direction: column;
`;
const Title = styled.h2`
font-size:20px;
font-weight:300;
`;
const Input = styled.input`
flex:1;
min-width:40%;
margin:20px 5px 5px;
padding:15px;
`;
// const Link = styled.a`
// margin:5px 0px;
// font-size:20px;
// text-decoration:underline;
// cursor:pointer;
// `;

const Button = styled.button`
width:40%;
border:none;
padding : 10px 5px;
background-color:teal;
color:white;
cursor:pointer;
`;

const Login = () => {
  return (
    <div>
    <Container>
      <Container>
        <Wrapper>
            <Title>SING IN</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="surname"/>
                <Input placeholder="Email address"/> 
                <Input placeholder="Put your orders here"/>  
                <Button>LOGIN</Button>
            </Form>
        </Wrapper>
    </Container>
   
    </Container>
     <Footer/>
     </div>
  )
}

export default Login