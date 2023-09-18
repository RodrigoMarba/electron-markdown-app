import { useCallback, useState } from "react";
import "./App.scss";
import Editor from "./appComponents/editor";
import Preview from "./appComponents/preview";

const App: React.FC = () => {
	const [doc, setDoc] = useState<string>("# Hello, World!\n");

	const handleDocChange = useCallback((newDoc: string) => {
		setDoc(newDoc);
	}, []);

	return (
		<div className="app">
			<Editor onChange={handleDocChange} initialDoc={doc} />
			<Preview doc={doc} />
		</div>
	);
};

export default App;
