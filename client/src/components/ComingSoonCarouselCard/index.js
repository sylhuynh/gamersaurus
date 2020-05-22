import React from "react";
import "./style.css"
import { Link } from "react-router-dom";
export default function index(props) {
  const image = `https://images.igdb.com/igdb/image/upload/t_cover_big/${props.cover}.jpg`;
  const multi = props.date * 1000;
  const myDate = new Date(multi);
  const releaseDate = myDate.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const newRating = props.rating ? (props.rating.toFixed(0)) : "";
  let ratingElement;

  switch(newRating) {
    case "":
      ratingElement = "";
      break;
    case (props.rating.toFixed(0)):
      ratingElement = <p className="rating uk-position-small uk-position-bottom-right">{newRating}</p>
      break;
    default:
      break;
  }

  return (
    <li>
      <Link to={"/" + props.id}>
      <div className="card uk-card uk-card-default">
        <div className="uk-card-media-top">
          <img src={image} alt={props.name}></img>
        </div>
        <div className="comingSoonCardBody uk-card-body">
          <span className="uk-card-title">{props.name} </span>
          {ratingElement}
          <p >{props.date ? `${releaseDate}` : ""}</p>
        </div>
      </div>
      </Link>
    </li>
  );
}
