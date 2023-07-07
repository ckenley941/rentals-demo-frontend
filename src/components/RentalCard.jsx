import React, { useState, useEffect } from "react";
import { getRentals } from "../services/RentalsService.ts"
import TextField from '@mui/material/TextField';
import Rental from "../data/Rental.ts"
import RentalPrimaryImage from "./RentalPrimaryImage";
import RentalInfo from "./RentalInfo";
import RentalSearch from "./RentalSearch";

export default function RentalCard() {   
  const [rentals, setRentals] = useState([Rental]);
  const [filterQueryString, setFilterQueryString] = useState({
    keyword: "",
    pageLimit: 0,
    pageOffset: 0
  });

    useEffect(() => {
      loadData();
    }, [filterQueryString]);
  
    const loadData = async () => {
      console.log(filterQueryString);
      getRentals(filterQueryString).then((response) => {
        var includedData = response.data.included;     
        var rentalData = response.data.data.map((r) =>
        {
            var rental = {
              id: r.id,
              name: r.attributes.name,
              url: ""
            };  
            var img = includedData.filter(i => i.id === r.relationships.primary_image.data.id)[0];      
            if (img !== null){
              rental.url = img.attributes.url;
            }      
            return rental;
        });
        setRentals(rentalData);
      }); 
   
    }

    const pageLimitedChanged = (e) =>{     
      setFilterQueryString({...filterQueryString, pageLimit: parseInt(e.target.value)}); 
    }

    const pageOffsetChanged = (e) =>{     
      setFilterQueryString({...filterQueryString, pageOffset: parseInt(e.target.value)}); 
    }

    const textSearchChanged = (e) =>{      
      setFilterQueryString({...filterQueryString, keyword: e.target.value}); 
    }

    return (
        <div className="rental-card">
          <RentalSearch pageLimitedChanged={pageLimitedChanged} pageOffsetChanged={pageOffsetChanged} textSearchChanged={textSearchChanged}></RentalSearch>
        { 
        rentals.map((r) => 
        (   
           <div className="container">
            <RentalPrimaryImage url={r.url}></RentalPrimaryImage>
            <RentalInfo name={r.name}></RentalInfo>
           </div>
      ))}
      </div>
    );
    }