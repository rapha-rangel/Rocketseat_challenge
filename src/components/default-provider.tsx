"use client"

import { FilterContextProvider } from "@/contexts/filter-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import {ReactNode} from "react";
import { LocalStorageContextProvider } from "@/contexts/localStorage-context";
import StyledComponentsRegistry from "@/components/registry";

interface DefaultProviderProps {
  children: ReactNode;
}

export  function DefaultProvider({children}: DefaultProviderProps) {
  const client = new QueryClient();

  const theme = {
    laptopBreakpoint: "1024px",
    desktopBreakpoint: "968px",
    tabletBreakpoint: "768px",
  }
  
  return (
    <QueryClientProvider client={client}>
      <LocalStorageContextProvider>
      <FilterContextProvider>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </FilterContextProvider>  
      </LocalStorageContextProvider>
        
    </QueryClientProvider>
  )
}