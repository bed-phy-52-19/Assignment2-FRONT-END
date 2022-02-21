import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import styled from "styled-components"





const Container = styled.div`display :flex;`;
const Left = styled.div`flex: 1; display: flex; flex-direction: column; padding: 20px;`;

const Logo = styled.h1``;
const Desc =styled.p`
 margin : 20px 0px;
`;
const SocialContainer =styled.div`
display:flex;
`;
const SocialIcon =styled.div`
width: 40px;
height:40px;
border-radius:50%;
color: white;
background-color: #${props =>props.color};
display :flex;
align-items:center;
justify-content:center;
margin-right:15px;
`;

const Center = styled.div`flex :1; padding:20px;`;

const Title = styled.h3`
margin-bottom:30px;
`;
const List = styled.ul`
  margin:0;
  padding :0;
  list-style:none;
  display:flex;
  flex-wrap:wrap;
`;
const ListItem = styled.li`
width:50%; 
margin-bottom:10px;

`;

const Right = styled.div`flex: 1;`;
const ContactItem = styled.div`display:flex; align-item:center; margin-bottom:10px;`;
const Payments = styled.img` width :30%; height:30%; `;

const Footer = () => {
  return (
    <Container>
        <Left><Logo>CHISO</Logo>
        <Desc>There are many services that Chiso online shopping mall provides.
            This platform has been made by chiso's company to enable our customers to access our services 
            online, this will help our customers to see products using there smart phone or there laptops
            and make orders so that our employee deliver the service to them while at home at affordable prices.
        </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
            <Facebook/>
        </SocialIcon>
        <SocialIcon color="E4405F">
            <Instagram/>
        </SocialIcon>
        <SocialIcon color="55ACEE">
            <Twitter/>
        </SocialIcon>
        <SocialIcon color="E60023">
            <Pinterest/>
        </SocialIcon>
        </SocialContainer>
        </Left>
        <Center>

            <Title>Useful infomation</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Clothes</ListItem>
                <ListItem>Electronics</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Mode of payments</ListItem>
                <ListItem>Order tracking</ListItem>
                <ListItem>Whishlist</ListItem>
                <ListItem>Terms and Conditions</ListItem>

            
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/>Mbayani P.O Box 404 Blantyre;
            </ContactItem>
            <ContactItem>
               <Phone style={{marginRight:"10px"}}/> +265 993 827 065
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}}/>contact @ sadickchisomo3@gmail.com
            </ContactItem>
            <ContactItem>
               PAY YOUR BILLS THROUGH AIRTEL MONEY OR TNM MPAMBA AND FDH BANK
            </ContactItem>
            <Payments src = "FDH_BANK_logo-copy.png"/>
        
            <Payments src = "download.png"/>
            <Payments src = "images.jpeg"/>

        </Right>
    </Container>
  )
}

export default Footer