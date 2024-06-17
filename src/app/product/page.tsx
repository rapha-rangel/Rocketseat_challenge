"use client"
import { BackBtn } from "@/components/back-button";
import { DefaultLayout } from "@/components/default-page-layout";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useProduct from "@/hooks/useProduct";
import { bagIcon } from "@/icons/icons";
import { formatValue } from "@/utils/format-value";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { ProductInCart } from "@/types/product";



const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap:24px;

  section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      button{
        font-family: inherit;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #115d8c;
        mix-blend-mode: multiply;
        border-radius: 4px;
        color: white;
        border: none;
        cursor: pointer;
        padding: 10px 0px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        text-transform:uppercase;
        gap: 8px;
      }
    }
  }

  img {
    max-width: 640px;
    width:50%;
  }
`

const ProductInfo =styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  h2 {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    margin-top: 12px;
  }

  span:nth-of-type(2){
    font-weight: 600;
    font-size: 20px;
    color: var(--shapes-dark-2);
    margin-bottom: 24px;
  }

  p{
    font-weight: 600;
    font-size: 12px;
    color: var(--text-dark-2);
  }

  div{
    margin-top: 24px;

    h3 {
      text-transform: uppercase;
      color: var(--text-dark);
      font-weight: 500;
      font-size: 16px;
    }

    p {
      font-weight: 400;
      font-size: 14px;
      color: var(--text-dark);
    }
  }
`

export default function Product({searchParams}: {searchParams:{id:string}}){
  const {data} = useProduct(searchParams.id);
  const {updateLocalStorage} = useLocalStorage();
  const router = useRouter();

  const handleAddCart =()=>{
    let cartItem = localStorage.getItem("cart-items");
    
    if(cartItem){
      let cartItemArray = JSON.parse(cartItem);
      let existingArrayIndex = cartItemArray.findIndex((item:ProductInCart) => item.id === searchParams.id);
      
      if(existingArrayIndex !== -1){
        cartItemArray[existingArrayIndex].quantity += 1;
      } else{
        cartItemArray.push({
          ...data,
          id: searchParams.id,
          quantity: 1
        })
      }
      updateLocalStorage(cartItemArray);

    } else{
      if(data){
        const newItem= [{
          ...data,
          id: searchParams.id,
          quantity: 1
        }];
        updateLocalStorage(newItem);
      }
    }

    router.push("/cart")
  }

  return(
    <DefaultLayout>
      <Container>
        <BackBtn navigate="/"/>
        <section>
          <img src={data?.image_url} alt={data?.name}/>
          <div>
            <ProductInfo>
              <span>{data?.category}</span>
              <h2>{data?.name}</h2>
              <span>{formatValue(data?.price_in_cents ?? 0)}</span>
              <p>*Frete de R$40,00 para todo o Brasil. Grátis para compras acima de R$100,00</p>
              <div>
                <h3>Descrição</h3>
                <p>{data?.description}</p>
              </div>
            </ProductInfo>
            <button onClick={handleAddCart}>
              {bagIcon} Adicionar ao carrinho
            </button>
          </div>
        </section>
      </Container>
    </DefaultLayout>
  )
}