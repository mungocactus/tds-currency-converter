export default function Selects({
	selectLabelTitle,
	selectId,
	selectName,
	selectRef,
	getSelectValue,
	selectOptions,
}) {
	return (
		<div className="input-container">
			<label htmlFor={selectId}>{selectLabelTitle}</label>
			<select
				ref={selectRef}
				name={selectName}
				id={selectId}
				onChange={getSelectValue}
			>
				{selectOptions}
			</select>
		</div>
	);
}
