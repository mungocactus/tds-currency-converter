import { useEffect, useState } from "react";
import Options from "./options.jsx";

export default function Selects({
	selectLabelTitle,
	selectId,
	selectName,
	selectRef,
	getSelectValue,
}) {
	let [currencyData, setCurrencyData] = useState({
		name: "US Dollar",
		short_code: "USD",
	});
	// Populate Select Options on page load with useEffect
	useEffect(() => {
		let currencyListapi = `https://api.currencybeacon.com/v1/currencies?api_key=wOaB3DNGN9CleUy4OgtCIgsGbR0xeIQK`;

		fetch(currencyListapi)
			.then((response) => response.json())
			.then((data) => {
				setCurrencyData(data.response);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="input-container">
			<label htmlFor={selectId}>{selectLabelTitle}</label>
			<select
				ref={selectRef}
				name={selectName}
				id={selectId}
				onChange={getSelectValue}
			>
				{Object.keys(currencyData).map((key) => (
					<Options index={key} key={key} randomCurrency={currencyData[key]} />
				))}
			</select>
		</div>
	);
}
