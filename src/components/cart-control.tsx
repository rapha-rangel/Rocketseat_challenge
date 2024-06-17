"use clinet"

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { bagIcon } from "@/icons/icons";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const CartCount = styled.span`
  color: white;
  position: absolute;
  padding: 1px 7px;
  right:-10px;
  background-color: var(--delete-color);
  border-radius: 100% ;
  top: 50%;
  font-size: 12px;
`
const Container= styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor:pointer;
`

export function CartControl(){
  const router = useRouter();
  const {items} = useLocalStorage();

  return (
    <Container onClick={()=>router.push('/cart')}>
      {bagIcon}
      {items.length > 0  ? <CartCount>{items.length}</CartCount> : <CartCount>0</CartCount>  }
    </Container>
  )
}