import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
const Container = styled.div`
width:100%;
height:120vh;
display:flex;
background-color:#e9ecea;
position:relative;
overflow:hidden;
`
const Arrow = styled.div`
width:2%;
height :4%;
background-color:#fff7f7;
border-radius:50%;
display: flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
bottom:0;
margin:auto;
left:${props=> props.direction=== "left" && "10px"};
right :${props=> props.direction=== "right" && "10px"};
cursor :pointer;
opacity:0.5;

`
const Wrapper = styled.div`
height :100%;
display:flex; 
`
const Slide=styled.div`
 display: flex; align-items: center; width:100vw; height:100vh
`;
const ImageContainer=styled.div`flex:1;
height:100%;
`;
const Image = styled.img`
height :120%;
width:90%;
margin:0;
`
const InfoContainer=styled.div`flex:1; padding:50px`;
const Tittle = styled.h1``;
const Desc =styled.p``;
const Button = styled.button``;

const Slider = () => {
  return (
    <Container>
        <Arrow direction ="left">
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper>
            <Slide>
<ImageContainer>
    <Image src="sue.jpg" />
</ImageContainer>
<InfoContainer> 
    <Tittle>ONE SIDE TALL DRESS</Tittle>
    <Desc>DON'T COMPROMISE ON STYLE! GET YOURS NOW!!!
              <Desc>GET UP TO 50% DISCOUNT WOW!!!</Desc>  
    </Desc>
    <Button>SHOW NOW</Button>
</InfoContainer>
</Slide>
<Slide>
<ImageContainer>
    <Image src="sue.jpg" />
</ImageContainer>
<InfoContainer> 
    <Tittle>ONE SIDE TALL DRESS</Tittle>
    <Desc>DON'T COMPROMISE ON STYLE! GET YOURS NOW!!!</Desc>
    <Button>SHOW NOW</Button>
</InfoContainer>
</Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider