// SelectRegion
import React from "react";

const SelectRegion = ({ region, onRegionChange }) => {
  const optionsRegion = [ "","Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleRegionChange = (e) => {
    let selectedRegion = e.target.value;
    onRegionChange(selectedRegion);
  };

  return (
    <div className="Filter">
      <select
        id="SelectRegion"
        value={region}
        onChange={handleRegionChange}
      >
        {optionsRegion.map((option) => (
          <option key={option} value={option}>{option || "Filter by Region"}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectRegion;
