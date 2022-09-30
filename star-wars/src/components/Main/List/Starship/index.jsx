import Container from "./style.js";
import { GiSpaceship } from "react-icons/gi";

function Starship({
  name,
  model,
  manufacturer,
  cost_in_credits,
  length,
  max_atmosphering_speed,
  crew,
  passengers,
}) {
  return (
    <Container>
      <div>
        <GiSpaceship />
        <h4>{name}</h4>
      </div>
      <div>
        <div>
          <p>Fabrication</p>
          <span>Model: {model}</span>
          <span>Manufacturer: {manufacturer}</span>
          {cost_in_credits !== "unknown" ? (
            <span>Cost: $ {cost_in_credits}</span>
          ) : (
            <span>Cost: ???</span>
          )}
        </div>
        <div>
          <p>Details</p>
          <span>Length: {length}</span>
          <span>Max atmosphering speed: {max_atmosphering_speed}</span>
        </div>
        <div>
          <p>Tripulation</p>
          <span>Crew: {crew}</span>
          <span>Passengers: {passengers}</span>
        </div>
      </div>
    </Container>
  );
}

export default Starship;
