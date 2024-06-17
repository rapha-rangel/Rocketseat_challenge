import { arrowBack } from "@/icons/icons";
import { useRouter } from "next/navigation";
import styled from "styled-components";

const Button = styled.button`
  border: none ;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  line-height: 150%;
  font-family: inherit;
  cursor: pointer;
`

const ArrowBackIcon = styled.span`
  border: 1px solid var(--secundary-text) ;
  border-radius: 50%;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg{
    font-size: 14px;
  }
`
interface BtnProps {
  navigate: string;
}

export function BackBtn({navigate}: BtnProps ){
  const router = useRouter();
  const handleNavigate = ()=>{
    router.push(navigate)
  }
  return(
    <Button onClick={handleNavigate}>
      <ArrowBackIcon>{arrowBack}</ArrowBackIcon>
      <span>voltar</span>
    </Button>
  )
}