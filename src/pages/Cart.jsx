import styled from "styled-components"
import Announcement from "./Announcement"
import Footer from "./Footer"
import Nevbar from "./Nevbar"

const Container = styled.div``;
const Wrapper = styled.div`
padding:20px;
`;
const Title = styled.h1`
font-weight:300;
text-align:center;
`;
const Top = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
`;
const Bottom = styled.div``;
const TopButtom = styled.button`
padding :10px;
font-weight:600;
cursor: pointer;
`;
const TopTexts = styled.div``;
const Toptext = styled.span`text-decoration: underline; cursor:pointer;
margin: 0px 10px;`;

function Cart() {
  return (
    <Container>
        <Nevbar/>
        <Announcement/>
        <Wrapper><Title>YOUR BAG</Title>
        <Top>
<TopButtom>CONTINUE SHOPPING</TopButtom>
<TopButtom>CHECKOUT NOW</TopButtom>
<TopTexts>
    <Toptext>Shopping Bag(2)</Toptext>
    <Toptext>Your Wishlist</Toptext>
</TopTexts>
        </Top>
        <Bottom></Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart