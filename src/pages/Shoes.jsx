import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"
import Nevbar from "./Nevbar";
import Newsletter from "./Newsletter";

const Infoma =styled.div`
 opacity:0;
width:110%;
height:110%;
position: absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0,2);
z-index:3;
display:flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
&:hover{
  opacity: 1;
 background-color: ;
  transform: scale(1.1);
  cursor:pointer;
}
`;

const Container =styled.div`
flex:1;
// margin:5px;
min-width :280px;
background-color:;
backgroung-color:pink;
background-size:cover;
height: 350px;
align-items:center;
display:flex;
justify-content:center;
border-radius:0%;
background-color:;
position : relative;

&:hover {
  opacity: 1;
  // background-color:teal ;
  transform: scale(1.1);
  cursor:pointer;
}

`;
const Circle =styled.div`
width:200;
height:200;
border-radius:50%;
backgroung-color:white;
position: absolute;
&:hover{
  background-color:teal ;
  transform: scale(1.1);
  cursor:pointer;


`;
const Image =styled.img`
   height:90%;
   z-index:2;
   width:90%;
  
`;
const Desc =styled.h3`color:teal; `;
const Icon =styled.div`
width: 30px;
height: 30px;
border-radius: 50%;
background-color: white;
display: flex;
align-items:center;
justify-content: center;
margin: 10px;
transition : all 0.5s ease;
&:hover{
  background-color:teal ;
  transform: scale(1.1);
  cursor:pointer;

}
`;

const Shoes = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src = {item.img}/>
        
        <Infoma>
        <Icon><ShoppingCartOutlined/></Icon>
        <Icon><SearchOutlined/></Icon>
        <Icon><FavoriteBorderOutlined/></Icon>
        <Desc>{item.desc}</Desc>
        </Infoma>
    </Container>
  )
}

export default Shoes