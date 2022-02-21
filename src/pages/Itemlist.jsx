
import styled from "styled-components"
import Announcement from "./Announcement";
import Categories from "./Categories";
import Footer from "./Footer";
import Nevbar from "./Nevbar"
import Newsletter from "./Newsletter";

const Container = styled.div``;
const Title = styled.h1``;
const FilterContainer = styled.div`display:flex; justify-content:space-between; margin-right:20px; `;
const Filter = styled.div`margin:1px; justify-content:space-between; margin-right:20px;`;
const FilterText = styled.span`font-size:20px; font-weight:60px;  `;
const Select = styled.select`padding: 10px; margin-right:20px margin-bottom:18px`;
const Option = styled.option``;

const Itemlist = () => {
  return (
    <Container>
      <Announcement/>
        <Title>Clothes</Title>
        <FilterContainer>
          <Filter><FilterText>filter products:</FilterText> </Filter>
          <Select>
            <Option disabled selected>
              color
            </Option>
            <Option>white</Option>
            <Option>red</Option>
            <Option>gray</Option>
            <Option>blue</Option>
            <Option>pink</Option>
          </Select>
          <Select>
            <Option disabled selected>
              size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
          <Filter><FilterText>Sort products:</FilterText> </Filter>
          <Select>
            <Option selected>
            Newest
            </Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          
      
          </Select>
        </FilterContainer>
        <Categories/>
      
    </Container>
  )
}

export default Itemlist