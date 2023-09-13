import { useCallback, useState } from "react";
import "./App.scss";
import Editor from "./editor";

console.log("[App.tsx]", `Hello world from Electron ${process.versions.electron}!`);

const App: React.FC = () => {
	const [doc, setDoc] = useState<string>("# Hello, World!\n");

	const handleDocChange = useCallback((newDoc: string) => {
		setDoc(newDoc);
	}, []);

	return (
		<div className="app">
			<Editor onChange={handleDocChange} initialDoc={doc} />
		</div>
	);
};

export default App;
