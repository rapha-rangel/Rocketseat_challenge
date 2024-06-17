import { ProductPromiseTypes } from './../types/product';

import { useQuery } from "@tanstack/react-query";
import axios ,{ AxiosPromise }from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (productId:string): AxiosPromise<ProductPromiseTypes> =>{
  return axios.post(API_URL,{query: `
      query{ 
        Product(id: "${productId}"){
          price_in_cents,
          name,
          category,
          description,
          image_url
        }
      }`
  })
}

export default function useProduct(id: string){
  const {data} = useQuery({
    queryKey: ['product', id],
    queryFn: ()=>fetcher(id),
    enabled: !!id,
    staleTime: 1000*60*5
  })

  return {
    data: data?.data?.data?.Product
  }
}