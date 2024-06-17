import { useFilter } from "@/hooks/useFilter"
import useProduct from "@/hooks/useProduct"
import { useProducts } from "@/hooks/useProducts"
import { arrowLeft, arrowRight } from "@/icons/icons"
import { rangeArrayPagination } from "@/utils/pagination-range"
import styled from "styled-components"

interface PaginationContainerProps {
  $selected: boolean
}

const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  justify-content: flex-end;
  margin: 12px 0px;
`

const ButtonPag = styled.button<PaginationContainerProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E9E9F0;
    color: ${props => props.$selected ? "var(--orangeLow-color)": "var(--text-dark)"};
    font-family: inherit;
    font-size: 12px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    border-radius: 8px;
    padding:2px 2px;
    border: ${props => props.$selected ? "1px solid var(--orangeLow-color)": "none"};
    cursor: pointer;
    width:30px;

    &:hover{
      color: white;
      background-color: var(--text-dark);
    }
`

const ButtonWithArrow = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #E9E9F0;
    color: var(--text-dark);
    font-family: inherit;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    text-align: center;
    border-radius: 8px;
    padding:4px 2px;
    border: none;
    width:30px;
    cursor: pointer;

    &:hover{
      color: white;
      background-color: var(--text-dark);
    }
`

export function Pagination(){
  const {setPage, page, type} = useFilter();
  const {data} = useProducts();
  console.log(data)
  const arrayPagination = rangeArrayPagination(type);

  const handleChoisePage = (value:number)=>{
    setPage(value)
  }

  const handlePageDown = ()=>{
    if(page > 0) setPage(page-1)
  }

  const handlePageUp = ()=>{
    if(page < arrayPagination.length-1) setPage(page+1)
  }

  return (
    <PaginationContainer>
      {arrayPagination.length > 0 &&
        arrayPagination.map((num:number)=> 
          <ButtonPag 
            key={num}
            $selected ={page === num}
            onClick={()=>handleChoisePage(num)}>
              {num+1}
          </ButtonPag>
        )}
      <ButtonWithArrow onClick={()=>handlePageDown()}>{arrowLeft}</ButtonWithArrow>
      <ButtonWithArrow onClick={()=>handlePageUp()}>{arrowRight}</ButtonWithArrow>
    </PaginationContainer>
  )
}