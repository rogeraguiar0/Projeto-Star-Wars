import { Container } from "./style.js";
import { GiDeathStar } from "react-icons/gi";

function Header() {
  return (
    <Container>
      <div>
        <GiDeathStar />
        <h1>Star Wars</h1>
      </div>
    </Container>
  );
}

export default Header;
