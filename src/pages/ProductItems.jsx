import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Infoma =styled.div`
opacity:0;
width:100%;
height:100%;
position: absolute;
top:0;
left:0;
background-color: rgba(0,0,0,0,2);
z-index:3;
display:flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
`;

const Container =styled.div`
flex:1;
margin:5px;
min-width :280px;
height: 350px;
align-items:center;
display:flex;
justify-content:center;
background-color: gray;
position : relative;

&:hover ${Infoma}{
  opacity: 1;
}

`;
const Circle =styled.div`
width:200;
height:200;
border-radius:50%;
backgroung-color:white;
position: absolute;

`;
const Image =styled.img`
   height:75%;
   z-index:2;
`;

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
  background-color: gray;
  transform: scale(1.1;);

}
`;

const ProductItems = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src = {item.img}/>
        <Infoma>
        <Icon><ShoppingCartOutlined/></Icon>
        <Icon><SearchOutlined/></Icon>
        <Icon><FavoriteBorderOutlined/></Icon>
        </Infoma>
    </Container>
  )
}

export default ProductItems