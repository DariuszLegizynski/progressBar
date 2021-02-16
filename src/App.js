import { useState } from "react";
import "./App.css";

function App() {
	let [bar, setBar] = useState(0);

	const myStyle = {
		width: `${bar}%`,
	};

	const fillBar = () => {
		const interval = setInterval(() => {
			setBar(bar++);
			console.log(bar);
			if (bar >= 100) {
				console.log("bar greater");
				clearInterval(interval);
				setBar(0);
			}
		}, 100);
	};

	return (
		<section className="App">
			<div className="App__div">
				<div style={myStyle} className="bar" />
			</div>
			<button onClick={fillBar}>Start</button>
		</section>
	);
}

export default App;
