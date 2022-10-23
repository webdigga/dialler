import React, { useState } from 'react';
import Key from './components/Key'
import './App.css';

function App(): JSX.Element {
	const [phoneNumber, setPhoneNumber] = useState(0);

	function setNumberFromClick(value: number): void {
		setPhoneNumber(parseInt("" + phoneNumber + value));
	}

	return (
		<div>
			<Key keyPadNumber={1} clickHandler={setNumberFromClick} />
			<Key keyPadNumber={2} clickHandler={setNumberFromClick} />
			<Key keyPadNumber={3} clickHandler={setNumberFromClick} />
			<Key keyPadNumber={4} clickHandler={setNumberFromClick} />
			<Key keyPadNumber={5} clickHandler={setNumberFromClick} />
			<Key keyPadNumber={6} clickHandler={setNumberFromClick} />
			<Key keyPadNumber={7} clickHandler={setNumberFromClick} />
			<Key keyPadNumber={8} clickHandler={setNumberFromClick} />
			<Key keyPadNumber={9} clickHandler={setNumberFromClick} />

			<div>{phoneNumber}</div>
		</div>
	);
}

export default App;
