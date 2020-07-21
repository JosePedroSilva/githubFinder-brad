import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		const name = 'Joe';
		const loading = false;

		return <div className="App">{loading ? <h4>Loading...</h4> : <h1>React app from {name}</h1>}</div>;
	}
}

export default App;
