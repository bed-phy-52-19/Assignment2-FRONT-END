import styled from "styled-components"
import { shoes } from "../data"
import Announcement from "./Announcement";
import Footer from "./Footer";
import Navber from "./Navber";
import Nevbar from "./Nevbar";
import Newsletter from "./Newsletter";
import Shoes  from "./Shoes"

const Container= styled.div`
padding:10px;
display : flex;
flex-wrap:wrap;
justify-content:space-between;
backgroung-color:pink;
background-size:cover;
`;

const Shoe = () => {
  return (
    <div>
      <Announcement/>
    
    <Container>
     
{shoes.map(item =>(
<Shoes item = {item} key={item.id}/>))}

    </Container>
    <Newsletter/>
 <Footer/>
    </div>
  )
}

export default Shoe