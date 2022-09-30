import Container from "./style.js";

function Navigation({ setFilter }) {
  return (
    <Container>
      <button onClick={() => setFilter("films")}>Films</button>
      <button onClick={() => setFilter("people")}>People</button>
      <button onClick={() => setFilter("planets")}>Planets</button>
      <button onClick={() => setFilter("starships")}>Starships</button>
    </Container>
  );
}

export default Navigation;
