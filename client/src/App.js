import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
	const [apiResponse, setApiResponse] = useState('');

	useEffect(() => {
		const callAPI = () => {
			fetch('http://localhost:5000/testAPI')
				.then((res) => res.text())
				.then((res) => setApiResponse(res));
		};

		callAPI();
	}, []);

	return (
		<div className="App">
			<h1>{apiResponse}</h1>
		</div>
	);
}

export default App;
