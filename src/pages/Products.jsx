import styled from "styled-components"
import { populerProducts } from "../data"

const Container= styled.div`
padding: 20px;
display : flex;
`

const Products = () => {
  return (
    <Container>
{populerProducts.map(item=>(
    <Products item = {item} key={item.id}/>
))}
    </Container>
  )
}

export default Products