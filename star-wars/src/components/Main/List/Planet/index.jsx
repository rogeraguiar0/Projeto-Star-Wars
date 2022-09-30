import Container from "./style.js";
import { GiRingedPlanet } from "react-icons/gi";

function Planet({ name, climate, terrain, population }) {
  return (
    <Container>
      <GiRingedPlanet />
      <p>{name}</p>
      <span>Climate: {climate}</span>
      <span>Terrain: {terrain}</span>
      <span>Population: {population}</span>
    </Container>
  );
}

export default Planet;
