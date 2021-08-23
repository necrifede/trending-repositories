import React, { useCallback } from "react";
import { number, string } from "prop-types";
import { noop } from "ramda-extension";

const Repository = ({ id, name, html_url, description, stargazers_count, favorites = {}, setFavorites = noop }) => {
  const handleChange = useCallback(
    () => setFavorites(favorites[id] ? { ...favorites, [id]: undefined } : { ...favorites, [id]: true }),
    [id, favorites, setFavorites]
  );

  return (
    <div className="card-body">
      <h3 className="card-title">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h3>
      <h6 className="card-subtitle mb-2 text-muted">{`\u2605 ${stargazers_count}`}</h6>
      <p className="card-text">{description}</p>

      <div className="form-check form-switch text-start">
        <input
          className="form-check-input"
          type="checkbox"
          id="favorite"
          checked={!!favorites[id]}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="favorite">
          Favorite
        </label>
      </div>
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
