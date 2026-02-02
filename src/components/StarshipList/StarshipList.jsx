import StarshipCard from "../StarshipCard/StarshipCard";

const StarshipList = (props) => {
  return (
    <section>
      {props.starships.map((currentStarship) => (
        <StarshipCard 
          key={currentStarship.name} 
          starship={currentStarship} 
        />
      ))}
    </section>
  );
};

export default StarshipList;