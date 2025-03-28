import React, { useEffect, useState } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((resp) => resp.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  function handleUpdatePlant(updatedPlant) {
    const updatedPlants = plants.map((plant) =>
      plant.id === updatedPlant.id ? updatedPlant : plant
    );
    setPlants(updatedPlants);
  }

  function handleSearch(searchTerm) {
    const filtered = plants.filter((plant) =>
      plant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setPlants(filtered);
  }

  return (
    <div className="app">
      <Header />
      <PlantPage
        plants={plants}
        onAddPlant={handleAddPlant}
        onUpdatePlant={handleUpdatePlant}
        onSearch={handleSearch}
      />
    </div>
  );
}

export default App;