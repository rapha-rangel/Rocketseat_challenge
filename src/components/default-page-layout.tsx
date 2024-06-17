"use client"

import styled from "styled-components";


export const DefaultLayout = styled.div`
  min-height: 100vh;
  background-color: var(--bg-primary);
  padding: 12px 24px;


  @media (min-width: ${props=> props.theme.desktopBreakpoint}){
    padding: 34px 160px;
  }
`