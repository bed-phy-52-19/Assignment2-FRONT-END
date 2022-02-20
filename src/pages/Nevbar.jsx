import { Badge } from '@material-ui/core';
import { Search, ShopOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Register from './Register';
import Login from './Login';

const Container = styled.div`
height:70px;
@media only screen and (max-width:380){
  display:none;
  background-color:blue;
}

`;
const Wrapper = styled.div`
padding :0px 20px;
display: flex;
justify-content:space-between;
`;
const Left =styled.div`
flex:1;
display:flex;
align-items:center;
`
const Language = styled.span`
font-size: 14px;
cursor:pointer;
`
const SearchContainer = styled.div`
border:0.5px solid lightgray;
display :flex;
align-items: center;
margin-left:25px;
padding:2px;

`
const Input =styled.input`
  border:none;
`
const Center =styled.div`flex:1;  text-align:center;`
const Logo =styled.h1`
front-weight:bold;
`
const Right =styled.div`flex:1; display :flex; align-items:center; justify-content:flex-end;`
const MenuItems=styled.h4`
font-size:14px;
cursor:pointer;
margin-left:50px;
`
const Nevbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer> <Input placeholder='search'/>
                <Search style={{color:"gray", fontSize:16}}/>
                </SearchContainer>
                   
            </Left>
            <Center><Logo>CHISO</Logo></Center>
            <Right>
                <MenuItems><Link to="register">REGISTER/CREATE ACCOUNT</Link></MenuItems>
                <MenuItems><Link to="login">SIGN IN</Link></MenuItems>
                <MenuItems><Badge badgeContent={4} color="primary"><ShoppingCartOutlined/></Badge></MenuItems>
                
            </Right>
        </Wrapper>
        </Container>
  )
}

export default Nevbar