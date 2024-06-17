import { useFilter } from "@/hooks/useFilter";
import { FilterType } from "@/types/filter-types";
import styled from "styled-components"

interface FilterItemProps{
  $selected: boolean;
}

const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`
const FilterItem= styled.li<FilterItemProps>`
  font-size: 12px;
  line-height: 18px;  
  text-transform: uppercase;
  color: var(--text-dark);
  font-weight: ${props => props.$selected? "600": "400"};
  font-family: inherit;
  list-style: none;
  cursor: pointer;
  border-bottom: ${props => props.$selected? "4px solid var(--orangeLow-color)": ""};

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    font-size: 16px;
  }
`

export function FilterByType(){
  const {type, setType, setPage} = useFilter();

  const handleType = (value: FilterType)=>{
    setType(value)
    setPage(0)
  }

  return (
    <FilterList>
      <FilterItem 
        $selected={ type === FilterType.ALL}
        onClick={()=>{handleType(FilterType.ALL)}}>
          Todos os produtos
      </FilterItem>
      <FilterItem 
        onClick={()=>{handleType(FilterType.SHIRT)}}
        $selected={ type === FilterType.SHIRT}>
          camisetas
      </FilterItem>
      <FilterItem 
        $selected={ type === FilterType.MUG}
        onClick={()=>{handleType(FilterType.MUG)}}>
          canecas
      </FilterItem>
    </FilterList>
  )
}