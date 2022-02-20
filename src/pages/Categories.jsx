import  styled  from "styled-components"
import { categories } from "../data"
import CategoriesItems from "./CategoriesItems"

const Container = styled.div`
display : flex;
padding:2px;
justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      
{categories.map(item=>(<CategoriesItems item = {item} key={item.id}/>))}
    </Container>
  )
}

export default Categories