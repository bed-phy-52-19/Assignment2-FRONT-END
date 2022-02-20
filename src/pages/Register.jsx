import styled from "styled-components"
import Footer from "./Footer";

const Container = styled.div`
width:100vw;
height:50vw;
background: url("eCommerce-online-shopping-india-1024x683.jpg") center;
 background-size:cover;
display:flex;
align-items:center;
justify-content: center;

`;
const Wrapper= styled.div`
width:40%;
padding:4px;
// background-color:white;
align-items:center;

`;
const Form = styled.form`
display:flex;
flex-wrap:wrap;
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
const Agreement = styled.span`
 font-size:12px;
 margin: 20px 0px;
`;
const Button = styled.button`
width:40%;
border:none;
padding : 10px 5px;
background-color:teal;
color:white;
cursor:pointer;
`;

const Register = () => {
  return (
    <div>
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="name"/>
                <Input placeholder="surname"/>
                <Input placeholder="Email address"/>
                <Input placeholder="location"/>
                <Input placeholder="phone number"/>
                <Input placeholder="mode of payment"/>
                <Agreement>By creating an account , you have to read all 
                    terms and condition since all terma and conditions will apply
                      <b>. TERMS AND CONDITIONS</b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
    <Footer/>
    </div>
  )
}

export default Register