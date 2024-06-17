"use client"

import { DefaultLayout } from "@/components/default-page-layout";
import { FilterBar } from "@/components/filter-bar";
import { Pagination } from "@/components/pagination";
import { ProductsList } from "@/components/products-list";
import styled from "styled-components";

const DefaultLayoutMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export default function Home() {

  return (
    <DefaultLayout>
      <DefaultLayoutMain >
        <FilterBar/>
          <Pagination/>
        <ProductsList/>
        <Pagination/>
      </DefaultLayoutMain>
    </DefaultLayout>
  );
}
