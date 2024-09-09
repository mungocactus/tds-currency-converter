// import { useState } from 'react'
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
			</div>
			<h1>Currency Converter</h1>
			<div>
				<div className="converter">
					<div className="input-container">
						<label>Currency</label>
						<select></select>
					</div>
					<div className="input-container">
						<label>Amount</label>
						<input></input>
					</div>
				</div>
				<p>TO</p>
				<div className="converter">
					<div className="input-container">
						<label>Currency</label>
						<select></select>
					</div>
					<div className="input-container">
						<label>Amount</label>
						<input></input>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
