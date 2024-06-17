import styled from "styled-components";

const DividerContainer= styled.div`
  height: 1px;
  width: 100%;
  margin: 8px auto;
  padding: 0px;
  background-color: var(--shapes);
`

export function Divider(){
  return (
    <DividerContainer></DividerContainer>
  )
}