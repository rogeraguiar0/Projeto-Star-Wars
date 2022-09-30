import Container from "./style.js";
import { GiFilmProjector } from "react-icons/gi";

function Films({ title, release_date }) {
  return (
    <Container>
      <GiFilmProjector />
      <p>{title}</p>
      <span>{release_date}</span>
    </Container>
  );
}

export default Films;
