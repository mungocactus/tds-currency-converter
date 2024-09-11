export default function Options({ randomCurrency }) {
	return (
		<option key={randomCurrency.id} value={randomCurrency.short_code}>
			{randomCurrency.name}
		</option>
	);
}
