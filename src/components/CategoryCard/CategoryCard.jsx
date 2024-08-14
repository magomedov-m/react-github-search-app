import React from "react";
import styled from "./CategoryCard.module.sass";

export default function CategoryCard(props) {
  console.log("CategoryCard", props.props);
  return (
    <div className={styled.info_repo}>
      <div className={styled.info_repo__cell}>
        <div className={styled.info_repo__title}>{props.props.name}</div>
      </div>
      <div className={styled.info_repo__cell}>
        <div className={styled.info_repo__title}>{props.props.language}</div>
      </div>
      <div className={styled.info_repo__cell}>
        <div className={styled.info_repo__title}>{props.props.forks_count}</div>
      </div>
      <div className={styled.info_repo__cell}>
        <div className={styled.info_repo__title}>{props.props.stargazers_count}</div>
      </div>
      <div className={styled.info_repo__cell}>
        <div className={styled.info_repo__title}>{props.props.updated_at}</div>
      </div>
    </div>
  );
}
