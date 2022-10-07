import React, { useState } from 'react';
import Key from './components/Key'
import './App.css';

function App() {	
	return (
		<div>			
			<Key keyPadNumber={1} />
			<Key keyPadNumber={2} />
			<Key keyPadNumber={3} />
			<Key keyPadNumber={4} />
			<Key keyPadNumber={5} />
			<Key keyPadNumber={6} />
			<Key keyPadNumber={7} />
			<Key keyPadNumber={8} />
			<Key keyPadNumber={9} />			
		</div>
	);
}

export default App;
