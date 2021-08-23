import { useState } from "react";
import { cx, valueMirror } from "ramda-extension";
import "./App.css";
import { FavoritesList, RepositoriesList } from "./components";

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
        {tab === tabs.REPOSITORIES && <RepositoriesList />}
        {tab === tabs.FAVORITES && <FavoritesList />}
      </main>
    </div>
  );
}

export default App;
