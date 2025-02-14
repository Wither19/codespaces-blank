import "./scss/App.scss";

import PokedexList from "./components/PokedexList";
import PokemonMenu from "./components/PokemonMenu";

import { useContext, useEffect, useState } from "react";

function App() {
	return (
		<>
			<div className="container-md">
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4 d-flex justify-content-center">
						<h1 className="pokedex-title">Pokédex</h1>
					</div>
					<div className="col-4"></div>
				</div>
				<PokedexList />
				<PokemonMenu />
			</div>
		</>
	);
}

export default App;
