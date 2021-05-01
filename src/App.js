import React, { useState, useEffect } from "react";
import "./App.css";
import Intro from "./search.png";
import Form from "./search";

function App() {
  const APP_ID = "550e1712";
  const APP_KEY = "047e093e8edd23a2c09a7bbb5496806e";

  const [query, setQuery] = useState("chicken");
  const [recepies, setRecepies] = useState([]);
  const [search, setSearch] = useState("");
  const [tag, setTag] = useState(false);

  const getRecepi = async () => {
    const responce = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await responce.json();
    setRecepies(data.hits);
  };

  const hadleSubmit = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
    setTag(false);
  };
  const foodMakeing = (id) => {
    console.log(id);
    // setRecepies([]);
    let itemDetails = recepies.filter((food) => food.recipe.label === id);
    setRecepies(itemDetails);
    setTag(true);
  };

  const FoodList = () => {
    return (
      <div className="item">
        {recepies.map((recepi) => {
          return (
            <div
              key={recepi.recipe.label}
              className="recipe"
              onClick={() => {
                foodMakeing(recepi.recipe.label);
              }}
            >
              <div className="recipe-content">
                <div className="img-box">
                  <img src={recepi.recipe.image} alt="" />
                </div>

                <h3>{recepi.recipe.label}</h3>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const FoodDiscription = () => {
    return (
      <div className="recipeItem">
        {recepies.map((recepi) => {
          console.log(recepies);
          return (
            <div key={recepi.recipe.label} className="discription">
              <div className="discription-box">
                <div className="dis-img">
                  <h2>{recepi.recipe.label}</h2>

                  <img src={recepi.recipe.image} alt="" />
                </div>
                <div className="dis">
                  <h2>Ingredient</h2>
                  <ol>
                    {recepi.recipe.ingredients.map((ingredient) => {
                      return (
                        <li>
                          <h4>{ingredient.text}</h4>
                        </li>
                      );
                    })}
                  </ol>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    getRecepi();
    console.log(tag);
  }, [query]);

  return (
    <div className="App">
      <div className="nav">
        <h2>Foodima</h2>
      </div>
      <div className="content">
        <div className="search-box">
          <div>
            <h1>Find Your Favorite Recipe</h1>
            <p >
              If you are a chef, no matter how good a chef you are, it's not
              good cooking for yourself; the joy is in cooking for others
            </p>
          </div>
          <img src={Intro} />
        </div>
        <Form hadleSubmit={hadleSubmit} search={search} setSearch={setSearch} />

        {tag ? <FoodDiscription /> : <FoodList />}
      </div>
      <div className="footer">
        <h4>@2021</h4>
      </div>
    </div>
  );
}

export default App;
