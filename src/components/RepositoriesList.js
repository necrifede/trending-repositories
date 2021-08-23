import React, { useEffect, useState } from "react";
import { bool } from "prop-types";
import axios from "axios";
import Repository from "./Repository";
import { host, pathname, getAWeekAgo } from "../utils";
import { cx } from "ramda-extension/";

const url = new URL(host);
url.pathname = pathname;

const RepositoriesList = ({ favoritesOnly = false }) => {
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
        <section key={id} className={cx("card", "mb-1", { "d-none": favoritesOnly && !favorites[id] })}>
          <Repository {...repository} id={id} favorites={favorites} setFavorites={setFavorites} />
        </section>
      ))}
    </>
  );
};

RepositoriesList.propTypes = {
  favoritesOnly: bool,
};

export default RepositoriesList;
