import { useState } from "react";

const StarshipSearch = (props) => {
  const [starshipName, setStarshipName] = useState('');
  const [prevSearchTerm, setPrevSearchTerm] = useState('');

  const submitHandler = (e) => {
    e.preventDefault(); 
    
    props.onSearch(starshipName);    
    setPrevSearchTerm(starshipName);
    setStarshipName('');
  };

  const handleReset = () => {
    props.onSearch('');
    setPrevSearchTerm('');
    setStarshipName('');
  };

  
  return (
    <section>
      <h3>
        {prevSearchTerm 
          ? `Last search: "${prevSearchTerm}"` 
          : "Search for a starship by name."
        }
      </h3>

      <p>Number of results: {props.resultCount}</p>
        {prevSearchTerm && (
        <button onClick={handleReset}>Show all starships</button>
      )}
      <form onSubmit={submitHandler}>
        <label htmlFor="search">Search Term: </label>
        <input 
          id="search"
          value={starshipName}
          onChange={(e) => setStarshipName(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
};

export default StarshipSearch;