"use client"

import styled from "styled-components";
import { InputHTMLAttributes } from "react";
import { searchIcon } from "@/icons/icons";

  const PrimaryInput = styled.input`
  border-radius: 8px;
  background-color: var(--bg-secondary);
  padding: 10px 16px;
  font-family: inherit;
  font-size: 12px;
  line-height: 22px;
  font-weight: 400;
  color: var(--text-dark);
  border: none;
  width: 100%;

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    font-size: 14px;
  }
` 

const InputContainer = styled.div`
  position: relative;
  width: 252px;

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
    width: 352px;
  }

  svg {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  handlechange: (value: string) => void
  value: string
  placeholder: string
}

export function PrimaryInputDiv(props: InputProps){


  return (
    <InputContainer>
      <PrimaryInput onChange={(e)=>props.handlechange(e.target.value)} 
        placeholder ={props.placeholder}
        value={props.value}/>
      {searchIcon}
    </InputContainer>
  )
}