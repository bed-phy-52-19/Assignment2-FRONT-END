import styled from "styled-components"
import { populerproducts } from "../data"
import ProductItems  from "./ProductItems"

const Container= styled.div`
padding:20px;
display : flex;
flex-wrap:wrap;
justify-content:space-between;
`;

const Products = () => {
  return (
    <Container>
{populerproducts.map(item =>(
<ProductItems item = {item} key={item.id}/>))}
    </Container>
  )
}

export default Products