import React, {useState} from "react";
import styled from "styled-components"
import Footer from "./Footer";
import Newsletter from "./Newsletter"
import { mobile } from '../rensponsive';

const Container = styled.div`
width:100vw;
height:50vw;
background: url("eCommerce-online-shopping-india-1024x683.jpg") center;
 background-size:cover;
display:flex;
align-items:center;
justify-content: center;
 ${mobile({height:"30px"})}
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

const Register = () =>{
  const [name, setName] = useState("")
  const [phonenumber, setPhonenumber] = useState()
  const [address, setAddress] = useState("")
  const [email, setEmail] = useState("")
  const [product, setProduct] = useState("")
  const [country, setCountry] = useState("")

   async function signup () {
   
    let item ={name,phonenumber,address,email,product,country}
    console.warn(item)
     let result = await fetch("https://chisoonlineshopping.herokuapp.com/swagger-ui/index.html" ,{
      method:'POST',
      body:JSON.stringify(item),

      headers:{
        "Content-Type":'application/json',
        "Accept":'application/json'
      }
    })
    result = await result.json();
     console.warn("result", result);
  }

  return (
    <div>
    <Container>
        <Wrapper>
            <Title>PROVIDE YOUR DETAILS </Title>
            <Form>
                <Input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name"/>
                <Input type="number" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)} className="form-control" placeholder="phonenumber"/>
                <Input type="text" value={address} onChange={(e)=>setAddress(e.target.value)} className="form-control" placeholder="address"/>
                <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email"/>
                <Input type="text" value={product} onChange={(e)=>setProduct(e.target.value)} className="form-control" placeholder="product"/>
                <Input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} className="form-control" placeholder="country"/>
                <Agreement>By providing your details we will be able to deliver the products and you have to read all 
                    terms and condition since all terms and conditions will apply
                      <b>. TERMS AND CONDITIONS</b>
                </Agreement>
                <Button onClick={signup} className="btn btn-primary">submit</Button>
            </Form>
        </Wrapper>
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Register