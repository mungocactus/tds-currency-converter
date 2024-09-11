import { useState, useRef } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputs from "./components/inputs.jsx";
import Selects from "./components/selects.jsx";
import Options from "./components/options.jsx";

function App() {
	// let [currencyData, setCurrencyData] = useState({
	// 	id: 147,
	// 	name: "US Dollar",
	// 	short_code: "USD",
	// });

	let [exchangedMoney, setExchangedMoney] = useState(1);

	const currencyFromSelect = useRef();
	const currencyToSelect = useRef();
	const currencyAmountInput = useRef();

	// Populate Select Options on page load with useEffect
	// useEffect(() => {
	// 	let currencyapi = `https://api.currencybeacon.com/v1/currencies?api_key=wOaB3DNGN9CleUy4OgtCIgsGbR0xeIQK`;

	// 	console.log(currencyapi);

	// 	fetch(currencyapi)
	// 		.then((response) => response.json())
	// 		.then((data) => {
	// 			setCurrencyData(data.response);
	// 		})
	// 		.catch((error) => console.log(error));
	// }, []);

	// Get various current values on change of any one of them
	function getCurrentValue() {
		let currencyFrom = currencyFromSelect.current.value;
		let currencyTo = currencyToSelect.current.value;
		let currencyAmount = currencyAmountInput.current.value;
		console.log(currencyFromSelect.current.value);
		console.log(currencyToSelect.current.value);
		console.log(currencyAmountInput.current.value);

		let currencyConvertapi = `https://api.currencybeacon.com/v1/convert?api_key=wOaB3DNGN9CleUy4OgtCIgsGbR0xeIQK&from=${currencyFrom}&to=${currencyTo}&amount=${currencyAmount}`;
		console.log(currencyConvertapi);

		fetch(currencyConvertapi)
			.then((response) => response.json())
			.then((data) => {
				setExchangedMoney(data.value.toFixed(2));
				console.log(data.value);
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
					{/* <div className="input-container">
						<label htmlFor="currency-1">Select Currency</label>
						<select
							ref={currencyFromSelect}
							name="currency-from"
							id="currency-1"
							onChange={getCurrentValue}
						>
							{Object.keys(currencyData).map((key) => (
								<Options
									index={key}
									key={key}
									randomCurrency={currencyData[key]}
								/>
							))}
						</select>
					</div> */}
					<Selects
						selectRef={currencyFromSelect}
						selectId="currency-1"
						selectLabelTitle="Select Currency"
						selectName="currency-from"
						getSelectValue={getCurrentValue}
					/>
					<Inputs
						inputRef={currencyAmountInput}
						labelTitle="Amount"
						inputType="number"
						inputId="amount"
						inputValue="1"
						inputPlaceholder="0"
						getValue={getCurrentValue}
					/>
				</div>
				<h4>Converts to</h4>
				<div className="converter">
					{/* <div className="input-container">
						<label htmlFor="currency-2">Select Currency</label>
						<select
							ref={currencyToSelect}
							name="currency-to"
							id="currency-2"
							onChange={getCurrentValue}
						>
							{Object.keys(currencyData).map((key) => (
								<Options
									index={key}
									key={key}
									randomCurrency={currencyData[key]}
								/>
							))}
						</select>
					</div> */}
					<Selects
						selectRef={currencyToSelect}
						selectId="currency-2"
						selectLabelTitle="Select Currency"
						selectName="currency-to"
						getSelectValue={getCurrentValue}
					/>
					<div className="input-container">
						<label>Amount</label>
						<div className="exchange-amount">
							<p>{exchangedMoney}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
