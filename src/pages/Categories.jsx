import  styled  from "styled-components"
import { categories } from "../data"
import Announcement from "./Announcement";
import CategoriesItems from "./CategoriesItems"
import Footer from "./Footer";
import Newsletter from "./Newsletter";
import { mobile } from '../rensponsive';

const Container = styled.div`
display : flex;
padding:2px;
justify-content: space-between;
flex-wrap:wrap;
${mobile({padding:"0px" ,flexDirection:"column"})}
`;

const Categories = () => {
  return (
    <div>
      
    <Container>
      
{categories.map(item=>(<CategoriesItems item = {item} key={item.id}/>))}
    </Container>
    <Newsletter/>
    <Footer/>
    </div>
  )
}

export default Categories