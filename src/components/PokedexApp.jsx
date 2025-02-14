import React from "react";

import { useEffect, useState, useContext } from "react";

import PokemonMenu from "./PokemonMenu";

function PokedexApp() {
	return (
		<>
			<div>
				{/*     
		• Small, Medium, Large and List viewpoints for list items
    • Search bar that filters list results
    • (BS5) Dropdown to filter by region (ideally, independent of the search bar)
    • Ascending-Descending Sort menu: Dex # (Default), A-Z
		 */}
			</div>
			<PokemonMenu />
		</>
	);
}

export default PokedexApp;
