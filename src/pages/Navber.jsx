import styled from "styled-components"
import { Link } from 'react-router-dom';
import ProductItems from "./ProductItems";
import { mobile } from '../Rensponsive';

const Container =styled.div`
height:10vh;
background:teal;
display:flex;
//  justify-content:center;
 align-items:center;
opacity:8;
// justify-content:space-between;
${mobile({backgroundColor:"red"})}

`;


const Items =styled.li`
color:white;
list-style:none;
padding-left:40px;
font-size:30s;
font-size:25px;
cursor:pointer;
`;
const Item =styled.li``;

function Navber() {
  return (
    <Container>
        <Items><Link to="/">Home</Link></Items>
      
        <Items><Link to="itemlist">Clothes</Link></Items>
        <Items><Link to="products">Electronics</Link></Items>
        <Items><Link to="shoe">Shoes</Link></Items>

    </Container>
  )
}

export default Navber