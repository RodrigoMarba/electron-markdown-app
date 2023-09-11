import { useState } from "react";
import "./App.scss";

console.log("[App.tsx]", `Hello world from Electron ${process.versions.electron}!`);

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="app">
			<header className="app-header">
				<p>Funcionas???</p>
				<p>
					<button onClick={() => setCount((count) => count + 1)}>
						Counter = {count}
					</button>
				</p>
			</header>
		</div>
	);
}

export default App;
