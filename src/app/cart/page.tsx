"use client"

import { BackBtn } from "@/components/back-button";
import { DefaultLayout } from "@/components/default-page-layout";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import styled from "styled-components";
import {ProductInCart} from '../../types/product';
import { formatValue } from "@/utils/format-value";
import { CartItem } from "@/components/cart/cart-item";
import { Divider } from "@/components/divider";

interface TotalItemProps {
  $isbold: boolean
}

const Container = styled.div`
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    flex-direction: row;
  }
`

const CartListContainer = styled.div`
  
  h3 {
    margin-top: 48px;
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    text-transform: uppercase;
    color: var(--text-dark-2);
  }

  p {
    font-size: 16px;
    font-weight: 300;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 500;
    }
  }
`

const CartList = styled.ul`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;


`

const CartListResult=styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  align-items: flex-start;
  padding: 16px 24px;
  min-width: 352px;

 
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`

const TotalItem = styled.div<TotalItemProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;
  font-weight: ${props=> props.$isbold ? "600" : "400"};
  line-height: 150%;
  margin-bottom: 12px;
`

const BuyButton = styled.button`
  border: none;
  color: white;
  width: 100%;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--success-color);
  font-family: inherit;
  padding: 8px 12px;
  margin-top: 40px;
  cursor: pointer;
`

export default function Cart(){
  const {items, updateLocalStorage} = useLocalStorage();

  const getAmount =(val: ProductInCart[])=>{
    return  val.reduce((acc, valor)=> acc + (valor.price_in_cents * valor.quantity),0);
  }

  const cartTotal = formatValue(getAmount(items));
  const totalWithFreight = items.length> 0 ?formatValue(getAmount(items)+4000): formatValue(0);

  const handleChangeProduct =(quantity: number, id: string)=>{
    const newValue = items.map((item:ProductInCart) =>{
      if(item.id === id) return  {...item, quantity: quantity};
      return item;
    })
    updateLocalStorage(newValue)
  }

  const handleDeleteProductOnCart = (id:string)=>{
    const deletedProduct = items.filter((item:{id:string}) => item.id !== id);
    updateLocalStorage(deletedProduct)
  }

  return(
    <DefaultLayout>
      <Container>
        <CartListContainer>
          <BackBtn navigate="/"/>
          <h3>Seu carrinho</h3>
          <p>Total ({items.length} produtos)
            <span> {cartTotal}</span>
          </p>
          <CartList>
            {items.length> 0 ?
              items.map((item:ProductInCart) => 
              <CartItem 
                handleDeleteProductOnCart={handleDeleteProductOnCart}
                handleChangeProduct={handleChangeProduct} 
                key={item.id} 
                product={item}/>
              )
              :
              <div>
                Não a produtos no Carrinho
              </div>
            }

          </CartList>
        </CartListContainer>
        <CartListResult>
          <h3>Resumo do pedido</h3>
          <TotalItem $isbold={false}>
            <p>Subtotal de produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem $isbold={false}>
            <p>Entrega</p>
            <p>{items.length>0?formatValue(4000):formatValue(0) }</p>
          </TotalItem>
          <Divider/>
          <TotalItem $isbold>
            <p>Total</p>
            <p>{totalWithFreight}</p>
          </TotalItem>
          <BuyButton>Finalizar a compra</BuyButton>
        </CartListResult>
      </Container>
    </DefaultLayout>
  )
}