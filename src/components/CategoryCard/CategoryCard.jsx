import React from "react";
import "./CategoryCard.sass";

export default function CategoryCard(props) {
  console.log("CategoryCard", props.props);
  return (
    <div className="info-repo">
      <div className="info-repo__cell">
        <div className="info-repo__title">{props.props.name}</div>
      </div>
      <div className="info-repo__cell">
        <div className="info-repo__title">{props.props.language}</div>
      </div>
      <div className="info-repo__cell">
        <div className="info-repo__title">{props.props.forks_count}</div>
      </div>
      <div className="info-repo__cell">
        <div className="info-repo__title">{props.props.stargazers_count}</div>
      </div>
      <div className="info-repo__cell">
        <div className="info-repo__title">{props.props.updated_at}</div>
      </div>
    </div>
  );
}
