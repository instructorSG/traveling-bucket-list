// import React, { useEffect } from "react";
 import { useState } from "react";
import Card from "./Card";


function Visited({ cities }) {
    const [search, setSearch] = useState("");

    const getData = () => {
        const ary = [];

        cities
        .filter((city) => city.name.toLowerCase().includes(search.toLowerCase()))
        .forEach((city) => {
            if (city.visited === true) {
                ary.push(
                <Card
                    key={city.id}
                    title={city.name}
                    imageUrl={city.image}
                    body={city.details}
                />
                );
            }
        });
        return ary;
    };

    function handleSearch(event) {
        const val = event.target.value;
        //const filteredCities = cities.filter((city) => city.name.toLowerCase().includes(val.toLowerCase()))
        //console.log(filteredCities)
        setSearch(val);
    }

    console.log(search)
    return (
        <div>
        <input onChange={handleSearch} value={search}>
        </input>
        <ul>{getData()}</ul>
        </div>
    );
}


export default Visited;
