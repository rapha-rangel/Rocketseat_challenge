import styled from "styled-components";
import React, { useState, useRef } from "react";
import { useFilter } from "@/hooks/useFilter";
import { PriorityTypes } from "@/types/priority-types";
import { arrowDown } from "@/icons/icons";

interface PriorityListProps{
  $selected: boolean
}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  button{
    border: none;
    font-family: inherit;
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    justify-content: center;  
    background: transparent;
    cursor: pointer;

    svg{ 
      margin-left: 16px;
    }
  }
` 

const PriorityFilter= styled.ul`
  position: absolute;
  top:100%;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  padding: 12px 16px;
  list-style:none;
  width: 200px;
  z-index: 10;
  right: 8px;

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    left: 0;
  }

  li + li{ 
    margin-top: 4px;
  }
`

const PriorityList = styled.li<PriorityListProps>`
  color: ${props => props.$selected ?"white":"var(--text-dark)"};
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-transform: capitalize;
  background-color: ${props => props.$selected ? "var(--orangeLow-color)": "transparent"};
  cursor: pointer;
  &:hover{
    background-color: var(--logo-color);
    color: white;
  }
`

export function FilterByPriority(){
  const [isOpen, setIsOpen] = useState(false);
  const {priority, setPriority} = useFilter();
  
  const handleOpen = ()=> setIsOpen(prev=> !prev);

  const handlePriority =(value: PriorityTypes, ) => {
    setPriority(value);
    setIsOpen(false);
  }
  
  return (
    <FilterContainer>
      <button onClick={handleOpen}>
        organizar por
        {arrowDown}
      </button>
      {isOpen &&
        <PriorityFilter>
          <PriorityList
            $selected = {priority === PriorityTypes.NEWS}
            onClick={()=>handlePriority(PriorityTypes.NEWS)} >novidades</PriorityList>
          <PriorityList 
            $selected = {priority === PriorityTypes.BIGGEST_PRICE}
            onClick={()=>handlePriority(PriorityTypes.BIGGEST_PRICE )} >Preço: maior - menor</PriorityList>
          <PriorityList 
            $selected = {priority === PriorityTypes.MINOR_PRICE}
            onClick={()=>handlePriority(PriorityTypes.MINOR_PRICE)} >Preço: menor - maior</PriorityList>
          <PriorityList 
            $selected = {priority === PriorityTypes.POPULARITY}
            onClick={()=>handlePriority(PriorityTypes.POPULARITY)} >mais vendidos</PriorityList>
        </PriorityFilter>
      }
    </FilterContainer>
  )
}