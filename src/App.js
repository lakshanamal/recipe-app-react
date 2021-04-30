import React, { useState, useEffect } from "react";
import "./App.css";
import Recipe from "./recepi";
import Intro from "./search.png";

function App() {
  const APP_ID = "550e1712";
  const APP_KEY = "047e093e8edd23a2c09a7bbb5496806e";

  const [query, setQuery] = useState("chicken");
  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState("");

  const getRecepi = async () => {
    const responce = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await responce.json();
    setRecepies(data.hits);
    console.log(data.hits);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  useEffect(() => {
    getRecepi();
  }, [query]);

  return (
    <div className="App">
      <div className="nav">
        <h2>Foodima</h2>
      </div>
      <div className="content">
        <div className="search-box">
          <div>
            <h1>Recipe Contest</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat,
              inventore.
            </p>
          </div>
          <img src={Intro} />
        </div>
        <form className="search-form" onSubmit={hadleSubmit}>
          <input
            type="text"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
            placeholder="Search recipe ..."
          />
          <button type="submit" className="search-btn">
            Search
          </button>
        </form>
        <div className="item">
          {recepies.map((recepi) => {
            return (
              <Recipe
                title={recepi.recipe.label}
                img={recepi.recipe.image}
                key={recepi.recipe.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
