import { LocalStorageContext } from "@/contexts/localStorage-context";
import { useContext } from "react";

export function useLocalStorage(){
  return useContext(LocalStorageContext)
}