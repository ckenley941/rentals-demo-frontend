import { client } from "../data/DataStore"

export function getRentals(id: number) {
    return client.get(`rentals`);
  }
