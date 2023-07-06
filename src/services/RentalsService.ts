import { client } from "../data/DataStore"

export function getRentals(filter: RentalsFilterQueryString) {
  const params = filter;  
    return client.get(`rentals`, { params });
  }
