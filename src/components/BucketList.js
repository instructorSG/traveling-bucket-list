import React from "react";
import Card from "./Card";

function BucketList({ cities }){


    return (
        <ul>
        {cities.map(city =>{
           return <Card key={city.id} title={city.name} imageUrl={city.image} body={city.details}/>
        } 
        )}
        </ul>
        )
}

export default BucketList