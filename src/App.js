import { useState } from "react";
import "./App.css";

function App() {
	const [bar, setBar] = useState(0);

	if (bar > 100) {
		setBar(0);
	}

	console.log(bar);

	return (
		<section className="App">
			<div className="App__div">
				<div
					style={{ width: `${bar}%` }}
					className="bar"
				/>
			</div>
			<button onClick={() => setBar(bar + 5)}>
				Start
			</button>
		</section>
	);
}

export default App;
