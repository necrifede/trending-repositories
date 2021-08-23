import React from "react";
import { number, string } from "prop-types";

const Repository = ({ id, name, html_url, description, stargazers_count }) => {
  return (
    <div className="card-body">
      <h3 className="card-title">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
      <p className="card-text">{description}</p>
      <div>{stargazers_count}</div>
      <a href="." className="card-link">
        Card link
      </a>
      <a href="." className="card-link">
        Another link
      </a>
    </div>
  );
};

Repository.propTypes = {
  id: number,
  name: string,
  html_url: string,
  description: string,
  stargazers_count: number,
};

export default Repository;
