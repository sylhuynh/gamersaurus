import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import GameResults from "../../components/GameResults";
import GameCard from "../../components/GameCard";
import "./style.css";


function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  function handleFormSubmit(event) {
    event.preventDefault()
    console.log("Search", searchQuery)
    const fullSearch = `fields name, cover.image_id, aggregated_rating; limit 15; w cover != null & themes != (42); search "${searchQuery}";`
    API.fetchGames(fullSearch).then((response) => { console.log(response); setSearchResults(response.data.map(game=>({
      id: game.gameId,
      name: game.name,
      rating: game.aggregated_rating,
      cover: game.cover.image_id
    }))) })
  }

  return (
    <div className="uk-margin .uk-align-center App">
      <h1 className="App.header App.intro">Search</h1>
      <form className="uk-search uk-search-default">
        <span uk-search-icon></span>
        <input
          className="uk-search-input"
          name="search"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        <span></span>
        <button onClick={handleFormSubmit} type="button" className="uk-button button">Find Games</button>
      </form>
      <GameResults>
        {searchResults.map((game) => (
          <GameCard key = {game.id} cover = {game.cover} name = {game.name} rating = {game.rating}/> 
        ))}
      </GameResults>
    </div>
  );
}

export default Search;