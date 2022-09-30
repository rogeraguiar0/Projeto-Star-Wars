import Container from "./style.js";
import { FaUserCircle } from "react-icons/fa";

function People({ name, hair_color, eye_color }) {
  return (
    <Container>
      <FaUserCircle />
      <p>{name}</p>
      {hair_color !== "n/a" && <span>Hair color: {hair_color}</span>}
      {eye_color !== "n/a" && <span>Eye color: {eye_color}</span>}
    </Container>
  );
}

export default People;
