import { FilterType } from "@/types/filter-types";


export const rangeArrayPagination =(type:FilterType)=>{
  const painationArray =[]

  if(type === FilterType.ALL) {
    for (var i = 0; i < Math.ceil(60/12); i++) {
      painationArray.push(i)
    }
    return painationArray;
  }
    for (var i = 0; i < Math.ceil(30/12); i++) {
      painationArray.push(i)
    }
  return painationArray;
}