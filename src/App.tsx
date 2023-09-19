import { useCallback, useState } from "react";
import "./App.scss";
import Editor from "./appComponents/editor";
import Preview from "./appComponents/preview";
import FileManager from "./appComponents/fileManager";

const App: React.FC = () => {
	const [edit, setEdit] = useState(true);

	function handleClick() {
		setEdit(!edit);
	}

	const [doc, setDoc] = useState<string>("# Hello, World!\n");

	const handleDocChange = useCallback((newDoc: string) => {
		setDoc(newDoc);
	}, []);

	return (
		<div className="app">
			<FileManager edit={edit} handleClick={handleClick} />
			{edit ? <Editor onChange={handleDocChange} initialDoc={doc} /> : <Preview doc={doc} />}
			<div className="text-controller">
				<button className="button-text-controller" onClick={handleClick}>
					{edit ? "Preview" : "Edit"}
				</button>
			</div>
		</div>
	);
};

export default App;
