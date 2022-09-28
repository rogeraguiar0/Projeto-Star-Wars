import { Container } from "./style.js";
import { GiDeathStar } from "react-icons/gi";

function Header() {
  return (
    <Container>
      <div>
        <a target="blank" href="https://swapi.dev/">
          <GiDeathStar />
        </a>
        <h1>Star Wars</h1>
      </div>
    </Container>
  );
}

export default Header;
