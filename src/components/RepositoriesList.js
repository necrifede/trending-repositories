import React, { useEffect, useState } from "react";
import axios from "axios";
// import PropTypes from "prop-types";
import Repository from "./Repository";
import { host, pathname, getAWeekAgo } from "../utils";

const url = new URL(host);
url.pathname = pathname;

const RepositoriesList = () => {
  const [repositories, setRepositories] = useState([]);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || {});

  useEffect(() => {
    (async () => {
      const search = {
        q: `created:>${getAWeekAgo(new Date())}`,
        sort: "stars",
        order: "desc",
      };
      url.search = new URLSearchParams(search);
      const { data: { items = [] } = {} } = await axios.get(url);
      setRepositories(items);
    })();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      {repositories.map(({ id, ...repository }) => (
        <section key={id} className="card mb-1">
          <Repository {...repository} id={id} favorites={favorites} setFavorites={setFavorites} />
        </section>
      ))}
    </>
  );
};

RepositoriesList.propTypes = {};

export default RepositoriesList;
