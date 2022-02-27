import styled from "styled-components"
import { populerproducts } from "../data"
import { mobile } from "../rensponsive";
import Announcement from "./Announcement";
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import ProductItems  from "./ProductItems"

const Container= styled.div`
padding:20px;
display : flex;
flex-wrap:wrap;
justify-content:space-between;
${mobile({padding:"0px", flexDirection:"column"})};
`;

const Products = () => {
  return (
    <div>
      <Announcement/>
    <Container>
{populerproducts.map(item =>(
<ProductItems item = {item} key={item.id}/>))}
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Products