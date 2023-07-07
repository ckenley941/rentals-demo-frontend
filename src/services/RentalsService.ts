import { client } from "../data/DataStore"

export function getRentals(filter: FilterQueryString) {
  let url = "rentals";
  if (filter.keyword !== ""){
    url+= `?filter[keywords]=${filter.keyword}`;
  }
  if (filter.pageLimit > 0){
    url+= `${determineQueryString(url)}page[limit]=${filter.pageLimit}`;

  }
  if (filter.pageOffset > 0){
    url+= `${determineQueryString(url)}page[offset]=${filter.pageOffset}`;
  }

  return client.get(url);
  }

  function determineQueryString(url: string){
    if (url.indexOf("?") >  -1 ){
      return "&";
    }
    return "?";
  }