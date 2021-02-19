import { useState } from 'react';

const Form = ({ onCalc }) => {
	//States
	const [people, setPeople] = useState({ adults: 0, children: 0 });

	//Submit form
	const onSubmit = (e) => {
		e.preventDefault();
		onCalc(people);
	};

	//Return
	return (
		<form className="people-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Adultos:</label>
				<input
				className="people-number"
					type="number"
					value={people.adults}
					onChange={(e) => setPeople({ ...people, adults: e.target.value })}
				/>
			</div>
			<div className="form-control">
				<label>Crianças:</label>
				<input
				className="people-number"
					type="number"
					value={people.children}
					onChange={(e) => setPeople({ ...people, children: e.target.value })}
				/>
			</div>

			<input className="submit" type="submit" value="Calcular"></input>
		</form>
	);
};

export default Form;
