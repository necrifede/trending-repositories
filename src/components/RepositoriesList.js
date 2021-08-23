import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import Repository from "./Repository";

const oneRep = {
  id: "123",
  name: "namw",
  html_url: "http://google.com",
  description: "description",
  stargazers_count: 8,
};

const RepositoriesList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    setRepositories([oneRep]);
  }, []);

  return (
    <>
      {repositories.map((repository) => (
        <section className="card">
          <Repository {...repository} />
        </section>
      ))}
    </>
  );
};

RepositoriesList.propTypes = {};

export default RepositoriesList;
