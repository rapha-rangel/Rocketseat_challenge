import { FilterType } from "@/types/filter-types";
import { PriorityTypes } from "@/types/priority-types";

function getCategoryByType(type: FilterType){
  if(type === FilterType.SHIRT) return "t-shirts"
  if(type === FilterType.MUG) return "mugs"
  return ""
}

function getPriorityByType(type: PriorityTypes){
  if(type === PriorityTypes.POPULARITY) return {field:"sales" , order: "DSC"}
  if(type === PriorityTypes.MINOR_PRICE) return {field:"price_in_cents" , order: "ASC"}
  if(type === PriorityTypes.BIGGEST_PRICE) return {field:"price_in_cents" , order: "DSC"}
  return {field:"creted_at" , order: "DSC"}
}

export const mountQuery = (type: FilterType, priority: PriorityTypes, page:number) =>{
  if( type === FilterType.ALL && priority ==PriorityTypes.NEWS) {
    return `query{ 
              allProducts(sortField:"created_at", sortOrder:"DSC",page:${page}, perPage:12) {
                id,
                price_in_cents,
                name,
                image_url
              }
            }
            `
  } else {
    const sortSettings = getPriorityByType(priority);
    const categoryNotEmpty = getCategoryByType(type);
    return `query{ 
              allProducts (sortField:"${sortSettings.field}",page:${page},perPage:12, sortOrder:"${sortSettings.order}", 
                          ${categoryNotEmpty ? `filter: {category: "${getCategoryByType(type)}"}` :""}){
                id,
                price_in_cents,
                name,
                image_url
              }
            }`
  }
}