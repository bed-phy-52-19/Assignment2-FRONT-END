import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import  styled  from "styled-components"
import { mobile } from '../rensponsive';

const Div = styled.body`background-color: url('eCommerce-online-shopping-india-1024x683.jpg') no-repeat;
background-size:cover;`;
const Info = styled.div`
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
&:hover{
  opacity: 1;
 background-color: ;
  transform: scale(1.1);
  cursor:pointer;
}
`;
const Container =styled.div`
flex:1;
margin:5px;
min-width :280px;
height: 350px;
align-items:center;
display:flex;
justify-content:column;
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
border-radius:70%;
backgroung-color:white;
position: absolute;

`;
const Image = styled.img`
width: 100%;
height:100%;
object-fit:cover;
${mobile({height:"30vh"})}
`;

const Title = styled.h4`margin-bottom:1px; font-size:15;
color:white;
`;
const Button = styled.button`border:none; padding:1px; background-color:gray; color:white;
 cursor:pointer; font-weight:600;`;
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

const CategoriesItems = ({item}) => {
  return (

    <Container>
 <Image src = {item.img}/>
 <Info><Title>{item.title}</Title>
 {/* <Button>SHOP NOW</Button> */}

        <Icon><ShoppingCartOutlined/></Icon>
        <Icon><SearchOutlined/></Icon>
        <Icon><FavoriteBorderOutlined/></Icon>
        <Desc>{item.desc}</Desc>
      
 </Info>

    </Container>
  
  )
}

export default CategoriesItems