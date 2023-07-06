import React, { useState, useEffect } from "react";
import { getRentals } from "../services/RentalsService.ts"
import RentalsFilterQueryString from "../data/RentalsFilterQueryString.ts"
import Rentals from "../data/Rentals.ts"
import RelatedPrimaryImage from "./RentalPrimaryImage";

export default function RentalCard() {   
  const [rentals, setRentals] = useState([Rentals]);

    useEffect(() => {
      loadData();
    }, []);
  
    const loadData = async () => {
      getRentals().then((response) => {
        var rentalData = response.data.data;
        var includedData = response.data.included;

        rentalData.map((r) =>{
            var a = includedData.filter(i => i.id === r.relationships.primary_image.data.id);            
        });

        setRentals(rentalData);
        console.log(response.data);


      }); 
   
    };

    return (
      <div>
      { rentals.map((r) => (
      <span key={r.id}>
        <div>{r.attributes ? r.attributes.name : ""}</div>
        
        {/* <RelatedPrimaryImage primaryImageId={r.relationships.primaryImage.data.id}></RelatedPrimaryImage> */}
      </span>
      ))}
    </div>
    );
    }