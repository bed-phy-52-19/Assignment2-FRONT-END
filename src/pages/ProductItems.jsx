import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container =styled.div`
flex:1;
margin:5px;
`
const Circle =styled.div``
const Image =styled.div``
const Infoma =styled.div``
const Icon =styled.div``

const ProductItems = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.mg}/>
        <Infoma>
        <Icon><ShoppingCartOutlined/></Icon>
        <Icon><SearchOutlined/></Icon>
        <Icon><FavoriteBorderOutlined/></Icon>
        </Infoma>
    </Container>
  )
}

export default ProductItems