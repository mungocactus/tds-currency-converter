import { useEffect, useState, useRef } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputs from "./components/inputs.jsx";
import Selects from "./components/selects.jsx";

function App() {
	let [currencyData, setCurrencyData] = useState([]);
	let [currencyConverted, setCurrencyConverted] = useState(1);

	const currencyFromSelect = useRef();
	const currencyToSelect = useRef();
	const currencyInitialAmount = useRef();

	// Populate Select Options on page load with useEffect
	useEffect(() => {
		let currencyListapi = `https://api.currencybeacon.com/v1/currencies?api_key=wOaB3DNGN9CleUy4OgtCIgsGbR0xeIQK`;

		fetch(currencyListapi)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.response);
				setCurrencyData(data.response);
			})
			.catch((error) => console.log(error));
	}, []);

	currencyData.sort(function (a, b) {
		let textA = a.name;
		let textB = b.name;
		return textA.localeCompare(textB);
	});

	const getCurrencyOptions = currencyData.map((currency) => (
		<option key={currency.id} value={currency.short_code}>
			{currency.name}
		</option>
	));
	// end of populating Select Options

	// Get various current values on change of any one of them
	function getCurrentValue() {
		let currencyFrom = currencyFromSelect.current.value;
		let currencyTo = currencyToSelect.current.value;
		let currencyAmount = currencyInitialAmount.current.value;
		let currencyConvertapi = `https://api.currencybeacon.com/v1/convert?api_key=wOaB3DNGN9CleUy4OgtCIgsGbR0xeIQK&from=${currencyFrom}&to=${currencyTo}&amount=${currencyAmount}`;

		fetch(currencyConvertapi)
			.then((response) => response.json())
			.then((data) => {
				setCurrencyConverted(data.value.toFixed(2));
			})
			.catch((error) => console.log(error));
	}

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
					<Selects
						selectRef={currencyFromSelect}
						selectId="currency-1"
						selectLabelTitle="Select Currency"
						selectName="currency-from"
						getSelectValue={getCurrentValue}
						selectOptions={getCurrencyOptions}
					/>
					<Inputs
						inputRef={currencyInitialAmount}
						labelTitle="Amount"
						inputType="number"
						inputId="amount"
						inputValue="1"
						inputPlaceholder="0"
						getInputValue={getCurrentValue}
					/>
				</div>
				<h4>Converts to</h4>
				<div className="converter">
					<Selects
						selectRef={currencyToSelect}
						selectId="currency-2"
						selectLabelTitle="Select Currency"
						selectName="currency-to"
						getSelectValue={getCurrentValue}
						selectOptions={getCurrencyOptions}
					/>
					<div className="input-container">
						<label>Amount</label>
						<div className="exchange-amount">
							<p>{currencyConverted}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
