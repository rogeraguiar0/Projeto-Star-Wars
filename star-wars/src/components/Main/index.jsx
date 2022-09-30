import { useState, useEffect } from "react";
import "./style.css";
import Navigation from "./Navigation";
import List from "./List";

function Main() {
  const [filter, setFilter] = useState("films");

  const [swList, setSwList] = useState([]);

  useEffect(() => {
    // "https://swapi.dev/api/"
    fetch(`https://swapi.dev/api/${filter}/`)
      .then((resp) => resp.json())
      .then((json) => setSwList(json.results));
  }, [filter]);

  return (
    <main>
      <Navigation setFilter={setFilter} />
      <List filter={filter} swList={swList} />
    </main>
  );
}

export default Main;
