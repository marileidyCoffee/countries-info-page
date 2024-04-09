import React, { useState, useEffect } from "react";
import Card from "./Card";
import SelectRegion from "./SelectRegion";

const CountriesContainer = () => {
  const [countryData, setCountryData] = useState([]);
  const [region, setRegion] = useState("");
  const [name,setName]=useState('')
  const handleRegionChange = (option) => {
    setRegion(option);
  }
 
  
  const handleInputChange = (event) => {
    const { value } = event.target;
    setRegion('')
    setName(value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url;
        if (region) {
          url = `https://restcountries.com/v3.1/region/${region}`;
        } else if (name) {
          url = `https://restcountries.com/v3.1/name/${name}`;
        } else {
          url = `https://restcountries.com/v3.1/all`;
        }
  
        const response = await fetch(url);
  
        if (response.ok) {
          const data = await response.json();
          setCountryData(data);
        } else {
          console.error("Failed to fetch country data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };
  
    fetchData();
  }, [region, name]);
  
  return (
    <div>
      <div className="Filters">
        <div>
          <input id="search" type="search" name="search" placeholder="Search for a country" onChange={handleInputChange} />
        </div>
        <SelectRegion region={region} onRegionChange={handleRegionChange} />
      </div>
      <div className="cards">
        {countryData.map((country, index) => (
            <Card key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountriesContainer;
