import { ProductInCart } from "@/types/product";
import { formatValue } from "@/utils/format-value";
import styled from "styled-components";
import {ChangeEvent} from 'react';
import { trashIcon } from "@/icons/icons";

interface CartItemProps{
  product: ProductInCart
  handleChangeProduct: (quantity:number, id: string) => void
  handleDeleteProductOnCart: (id:string) => void
}

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 210px;
  border-radius: 8px;
  background-color: white;

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    max-width: 800px;
  }

  img {
    max-height: 100%;
    width: 256px;
    border-radius: 8px 0px 0px 8px;
  }
`

const SelectOptions = styled.select`
  padding:8px;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--bg-primary);
  color: var(--text-dark);
  font-size: 16px;
  font-weight: 400;
`

const CartInfo = styled.div`
  display: flex;
  width: 100%;
  height:100%;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  padding: 16px 24px;
  line-height: 150%;
  color: var(--text-dark-2);
  gap:8px;

  h4 {
    font-size: 20px;
    font-weight: 300;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  button {
    border: none;
    background: transparent;

    svg {
        font-size: 20px;
        color:var(--delete-color);
        cursor: pointer;
      }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    span {
      font-size: 16px;
      font-weight: 600;
      color: var(--shapes-dark);
    }
  }
`


export function CartItem({product, handleChangeProduct, handleDeleteProductOnCart}: CartItemProps){
  const numbers = [1,2,3,4,5];
  const formatPrice = formatValue(product.price_in_cents);

  return(
    <Item>
      <img src={product.image_url} alt={product.name}/>
      <CartInfo>
        <div>
          <h4>{product.name}</h4>
          <button onClick={()=>handleDeleteProductOnCart(product.id)}>{trashIcon}</button>
        </div>
        <p>{product.description}</p>
        <div>
          <SelectOptions 
            value={product.quantity} 
            onChange={(e: ChangeEvent<HTMLSelectElement>)=>handleChangeProduct(Number(e.target.value), product.id)}>
            {numbers.map((num, index) => 
              <option
                value={num} 
                key={index} >
                  {num}
              </option>)}
          </SelectOptions>
          <span>{formatPrice}</span>
        </div>
      </CartInfo>
    </Item>
  )
}