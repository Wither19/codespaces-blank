import "./scss/App.scss";

import PokedexList from "./components/PokedexList";
import PokemonMenu from "./components/PokemonMenu";

import { useContext, useEffect, useState } from "react";

import "@fontsource/ubuntu-sans/400.css";
import "@fontsource/ubuntu-sans/400-italic.css";
import "@fontsource/ubuntu-sans/700.css";
import "@fontsource/ubuntu-sans/700-italic.css";

import "@fontsource/roboto/400.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/700-italic.css";

import "@fontsource/inter/400.css";
import "@fontsource/inter/400-italic.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/700-italic.css";

function App() {
	return (
		<>
			<div className="container-md">
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4">
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
