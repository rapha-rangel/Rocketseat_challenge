import { formatValue } from "@/utils/format-value";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Divider } from "./divider";

interface ProductCardProps{
  image: string,
  price:number,
  title: string,
  id: string,
}

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255,255,255,0.4);
  backdrop-filter: blur(10px);
  border-radius: 0px 0px 4px 4px;
  width: 256px;
  cursor: pointer;
  &:hover{
    box-shadow: 6px 6px 2px rgba(0,0,0,0.15);
  }

  img {
    width:256px;
    height:300px;
  }

  h2 {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    color: var(--shapes-dark);
  }

  div{
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 8px;

    > div {
    height: 1px;
    width: 228px;
    margin: 8px 0px;
    padding: 0px;
    background-color: var(--shapes);
    }
  }
  
`

export function ProductCard(props: ProductCardProps){
  const router = useRouter();
  const price = formatValue(props.price)
  const handleNavigate =()=>{
    router.push("/product?id="+ props.id)
  }

  return(
    <Card onClick={handleNavigate}>
      <img 
        src={props.image} 
        alt={props.title}
      />
      <div>
        <h2>{props.title}</h2>
        <Divider/>
        <p>{price}</p>
      </div>
    </Card>
  )

}