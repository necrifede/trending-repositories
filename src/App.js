import { useState } from "react";
import { cx, valueMirror } from "ramda-extension";
import "./App.css";
import { RepositoriesList } from "./components";

const tabs = valueMirror(["REPOSITORIES", "FAVORITES"]);

function App() {
  const [tab, setTab] = useState(tabs.REPOSITORIES);

  const handleRepositoriesClick = () => setTab(tabs.REPOSITORIES);
  const handleFavoritesClick = () => setTab(tabs.FAVORITES);

  return (
    <div className="App">
      <header className="">
        <h1>Trending Repositories</h1>
      </header>
      <nav className="nav nav-tabs justify-content-center">
        <button className={cx("nav-link", { active: tab === tabs.REPOSITORIES })} onClick={handleRepositoriesClick}>
          Repositories
        </button>
        <button className={cx("nav-link", { active: tab === tabs.FAVORITES })} onClick={handleFavoritesClick}>
          Favorites
        </button>
      </nav>
      <main className="card-body">
        <RepositoriesList />
      </main>
    </div>
  );
}

export default App;
