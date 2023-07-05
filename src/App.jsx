import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import Profile from './components/Profile'
import { coffee, tea } from './components/utils/data';
import Button from './components/ui/Button';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';

export const App = () => {
	const [count, setCount] = useState(0);
	const description = <p>This app is going to change your life.</p>
	const greeting = 'Welcome to our Cafe'
	//const userDrink = undefined
	const [userDrink, setUserDrink] = useState(tea)

	return (
		<div className="App">
			{description}
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank" rel="noreferrer">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
				<h1>Vite + React</h1>
				<DrinkSearch />
				{userDrink ? (<DrinkChoice drink={userDrink}/>) : (<> <h1>{greeting}</h1>
				<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name}/> </>)}
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.jsx</code> and save to test HMR
				</p>
			</div>
			<Profile />
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			<Button />
		</div>
	);
};

export default App;
