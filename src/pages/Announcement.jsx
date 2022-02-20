import styled from "styled-components"

const Container = styled.div`
height:50px;
background-color:teal;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size: 14px;
font-weight:500;
`
const Image = styled.img`
height :100%;
width:5%;
`
 const Announcement = () => {
  return (
    <Container> SUPER DEAL!! FREE  DELIVERY  ON  ORDERS  <Image src="PngItem_227514.png"/> OVER  MWK500,000 </Container>
  )
}
export default Announcement