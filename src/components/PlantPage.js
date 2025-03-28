import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, onUpdatePlant, onSearch }) {
  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search onSearch={onSearch} />
      <PlantList plants={plants} onUpdatePlant={onUpdatePlant} />
    </main>
  );
}

export default PlantPage;
