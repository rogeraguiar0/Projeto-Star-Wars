/* eslint-disable array-callback-return */
/* eslint-disable default-case */
import Container from "./style.js";
import Films from "./Films";
import People from "./People/index.jsx";
import Planet from "./Planet";
import Starship from "./Starship";

function List({ filter, swList }) {
  return (
    <>
      <Container>
        <h3>List: {filter}</h3>
        {swList.map((elem, index) => {
          switch (filter) {
            case "films":
              return (
                <Films
                  key={index}
                  title={elem.title}
                  release_date={elem.release_date}
                />
              );

            case "people":
              return (
                <People
                  key={index}
                  name={elem.name}
                  hair_color={elem.hair_color}
                  eye_color={elem.eye_color}
                />
              );

            case "planets":
              return (
                <Planet
                  key={index}
                  name={elem.name}
                  climate={elem.climate}
                  terrain={elem.terrain}
                  population={elem.population}
                />
              );

            case "starships":
              return (
                <Starship
                  key={index}
                  name={elem.name}
                  model={elem.model}
                  manufacturer={elem.manufacturer}
                  cost_in_credits={elem.cost_in_credits}
                  length={elem.length}
                  max_atmosphering_speed={elem.max_atmosphering_speed}
                  crew={elem.crew}
                  passengers={elem.passengers}
                />
              );
          }
        })}
      </Container>
    </>
  );
}

export default List;
