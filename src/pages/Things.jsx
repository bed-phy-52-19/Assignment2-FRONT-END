
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components"
import Announcement from "./Announcement";
import Footer from "./Footer";
import Nevbar from "./Nevbar";
import Newsletter from "./Newsletter";

const Container = styled.div`background-color:pink;`;
const Wrapper = styled.div`padding:10px; display:flex;`;
const ImgContainer = styled.div`flex:1;`;
const Image = styled.img`width:100%; height:80%; object-fit:cover;`;
const InfoContainer = styled.div`flex:1; padding:0px 50px;`;
const Title = styled.h1`font-weight:200;`;
const Desc = styled.h3`margin:20px 0px; color:;`;
const Price = styled.h1` color: blue;`;
const FilterContainer = styled.div`
width:40%;
margin:30px 0px;
display:flex;
justify-content:space-between
`;
const FilterTitle = styled.span`
font-size:20px;
font-weight:200;
`;
const Filter = styled.div`
display:flex;
align-items:center;
`;
const FilterColor = styled.div`
width:20px;
height:20px;
border-radius:50%;
background-color: ${props=>props.color};
margin:0px 5px;
cursor: pointer;
`;
const FilterSize = styled.select`
margin-left:5px;
padding:2px;
`;
const FilterSizeOption = styled.option``;
const AddContainer = styled.div`
width:50%;
 display :flex;
 align-items:center;
 justify-content:space-between;
`;
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
`;
const Amount = styled.span`
width:15px;
height:30px;
border-radius:10px;
border:1px solid;
align-items:center;
justify-content:center;
margin:0px 5px;
`;
const Button = styled.button`padding:5px;
border:1px solid teal; background-color:white; cursor:pointer; font-weight:500;
&:hover{
    background-color:lightgray;
}
`;

const Things = () => {
  return (
    <Container>
        {/* <Nevbar/>
        <Announcement/> */}
        <Wrapper>
            <ImgContainer>
           <h2> special offer</h2>
            <Image src="photo-1483985988355-763728e1935b.jpeg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Special offer</Title>
                <Desc>Here are some of the products we offer that are made from out side country and
                     they are going at a cheep price considering the needs of our customers
                </Desc>
                <Price>MK12,000</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>color</FilterTitle>
                        <FilterColor color ="red"/>
                        <FilterColor color = "darkblue"/>
                        <FilterColor color ="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>size</FilterTitle>
                        <FilterSize><FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                </AddContainer>
                <Button>ADD TO CART</Button>
            </InfoContainer>
        </Wrapper>
        {/* <Newsletter/>
        <Footer/> */}
    </Container>
  )
}

export default Things