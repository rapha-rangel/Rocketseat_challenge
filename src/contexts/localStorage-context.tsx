"use client"

import { useEffect, createContext, useState, ReactNode, SetStateAction} from "react";
import { ProductInCart } from "@/types/product";

interface LocalStorageContextType{
  items: ProductInCart[];
  updateLocalStorage:(value: ProductInCart[])=>void
}

export const LocalStorageContext = createContext<LocalStorageContextType>({
  items:[],
  updateLocalStorage:(value: ProductInCart[])=>{}
})

interface ProviderProps{
  children: ReactNode
}

export function LocalStorageContextProvider({children}: ProviderProps){

  const [items, setItems] = useState<ProductInCart[]>([]);

  useEffect(() => {
    if( typeof window === "undefined") return;
    let value = window.localStorage.getItem("cart-items")
    if(value){ 
      setItems(JSON.parse(value));
    }
  }, [ ])

  const updateLocalStorage =(value:ProductInCart[])=>{
    setItems(value)
    localStorage.setItem("cart-items", JSON.stringify(value))
  }

  return (
    <LocalStorageContext.Provider
      value={{
        items, 
        updateLocalStorage
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  )
}