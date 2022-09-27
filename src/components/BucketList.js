import React from "react";
import Card from "./Card";

function BucketList({ cities }){

    const getData = () => {
        const ary = [];

        cities.forEach((city) => {
            if (city.visited === false) {
                ary.push(<Card key={city.id} title={city.name} imageUrl={city.image} body={city.details}/>)
            }
        });
        return ary;
    }

    return (
        <ul>
            {getData()}
        </ul>
    )
}

export default BucketList