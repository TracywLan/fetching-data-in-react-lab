import { useState, useEffect } from 'react';
import * as starshipService from './services/starshipService';
import StarshipList from './components/StarshipList/StarshipList';
import StarshipSearch from './components/StarshipSearch/StarshipSearch';
const App = () => {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayStarships, setDisplayStarships] = useState([]);

  useEffect(() => {
    const fetchStarships = async () => {
      const data = await starshipService.index();
      setStarshipsData(data);
      setDisplayStarships(data);
    };
    fetchStarships();
  }, []);

  const handleSearch = (searchTerm) => {
    const filteredList = starshipsData.filter((ship) => {
      const shipName = ship.name.toLowerCase();
      const searchInput = searchTerm.toLowerCase();
      
      return shipName.includes(searchInput);
    });

    setDisplayStarships(filteredList);
  };

  return (
    <main>
      <h1>Star Wars Starships</h1>
      
      <StarshipSearch onSearch={handleSearch} resultCount={displayStarships.length}/>
      <StarshipList starships={displayStarships} />
    </main>
  );
};

export default App;