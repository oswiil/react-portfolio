import "./App.css";
import "./styles/_base.scss";
import { Navbar } from "./components/navBar";
import { useState } from "react";
import RepoCli from "./components/repoHook";
import MainLang from "./components/getmainlang";
import RepoCli2 from "./components/repoHook2";

function App() {
  const [user_name, setUserName] = useState("oswiil");

  return (
    <div className="App" id="home">
      <Navbar className="navbar" />
      <header className="header">
        {" "}
        <div className="column has-text-centered p-6">
          <h2 className="title">Github profile searcher</h2>{" "}
          <div className="description">
            {" "}
            Busca un usuario de Github para listar sus repositorios, ver su
            actividad y mostrar los principales lenguajes.
          </div>
          <div className="has-text-centered mb-4">
            {" "}
            <label for="usearch" className="title"></label>
            <input
              className="search"
              type="search"
              id="gsearch"
              placeholder="buscar un usuario"
              name="usearch"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </div>
        </div>
      </header>
      <MainLang data={user_name}></MainLang>
      <div> </div>
      <RepoCli2 data={user_name}></RepoCli2>
      <div className="columns is-desktop p-6 is-multiline" id="studies">
        <div className="column is-offset mt-6">
          <div className="center mt-6"></div>
          <h5 className="title has-text-centered" id="projects">
            Repositorios del usuario {user_name}
          </h5>
          <div>
            <div className="columns is-multiline">
              <RepoCli data={user_name} />
            </div>
          </div>
        </div>
      </div>
      <div className="description">Hecho por Òscar-Sánchez</div>
      <div className="description">
        Documentación de Github
        <a href="https://docs.github.com/en/rest?apiVersion=2022-11-28">
          {" "}
          API REST
        </a>
      </div>
    </div>
  );
}

export default App;
