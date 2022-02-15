import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
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
z-index :2;
`
const Wrapper = styled.div`
height :100%;
display:flex; 
transform: translateX(${props =>props.slideIndex * -100}vw);
transition:all 2s ease;
`
const Slide=styled.div`
 display: flex; align-items: center; width:100vw; height:100vh;
 background-color:#${props=>props.bg};
`;
const ImageContainer=styled.div`flex:1;
height:100%;
`;
const Image = styled.img`
height :80%;
`;
const InfoContainer=styled.div`flex:1; padding:50px;`;
const Tittle = styled.h1``;
const Desc =styled.p` margin : 50px; font-size:25px; font-weight:500; letter-spacing:2px;`;
const Button = styled.button`padding:10px; font-size:15px; background-color:transparent; cursor:pointer;`;




const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction==="left"){
    setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
        }
    else{
        setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
    }
    };
  return (
    <Container>
        <Arrow direction ="left" onClick={()=>handleClick("left")}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {/* <Slide bg="fbf0f4">
<ImageContainer>
    <Image src="dots.png" />
</ImageContainer>
<InfoContainer> 
    <Tittle>ONE SIDE TALL DRESS</Tittle>
    <Desc>DON'T COMPROMISE ON STYLE! GET YOURS NOW!!!
              <Desc>GET UP TO 50% DISCOUNT WOW!!!</Desc>  
    </Desc>
    <Button>SHOW NOW</Button>
</InfoContainer>
</Slide>
<Slide bg="fcf1ed">
<ImageContainer>
    <Image src="tall.png" />
</ImageContainer>
<InfoContainer> 
    <Tittle>NEW RELEASE DRESS</Tittle>
    <Desc>DON'T COMPROMISE ON STYLE! GET YOURS NOW!!!
              <Desc>GET UP TO 50% DISCOUNT WOW!!!</Desc>  
    </Desc>
    <Button>SHOW NOW</Button>
</InfoContainer>
</Slide> */}
{sliderItems.map(item=>(
    <Slide bg={item.bg} key={item.id}>
    <ImageContainer>
        <Image src={item.image} />
    </ImageContainer>
    <InfoContainer> 
        <Tittle>{item.Tittle}</Tittle>
        <Desc>{item.Desc}</Desc>
        <Button>SHOW NOW</Button>
    </InfoContainer>
    </Slide>
))}

        </Wrapper >
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider