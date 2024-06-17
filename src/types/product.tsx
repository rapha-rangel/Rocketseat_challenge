export interface ProductProps {
  name: string,
  id: string,
  price_in_cents: number, 
  sales: number,
  image_url: string,
  description?: string
  category?: string
}

export interface ProductInCart extends ProductProps{
  quantity: number
}

export interface ProductPromiseTypes {
  data: {
    Product:ProductProps
  }
}