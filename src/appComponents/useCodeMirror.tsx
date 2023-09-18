import { useEffect, useState, useRef } from "react";
import { EditorState } from "@codemirror/state";
import {
	EditorView,
	keymap,
	highlightActiveLine,
	lineNumbers,
	highlightActiveLineGutter,
} from "@codemirror/view";
import { defaultKeymap, indentWithTab, history, historyKeymap } from "@codemirror/commands";
import {
	indentOnInput,
	bracketMatching,
	HighlightStyle,
	defaultHighlightStyle,
	syntaxHighlighting,
} from "@codemirror/language";
import { tags } from "@lezer/highlight";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { oneDark } from "@codemirror/theme-one-dark";
import type React from "react";

export const transparentTheme = EditorView.theme({
	"&": {
		backgroundColor: "transparent !important",
		height: "100%",
	},
});

const myHighlighting = HighlightStyle.define([
	{
		tag: tags.heading1,
		fontSize: "1.6em",
		fontWeight: "bold",
	},
	{
		tag: tags.heading2,
		fontSize: "1.4em",
		fontWeight: "bold",
	},
	{
		tag: tags.heading3,
		fontSize: "1.2em",
		fontWeight: "bold",
	},
	{
		tag: tags.keyword,
		color: "#fc6",
	},
	{
		tag: tags.comment,
		color: "#f5d",
		fontStyle: "italic",
	},
	{
		tag: tags.quote,
		color: "#999",
	},
]);

interface Props {
	initialDoc: string;
	onChange?: (state: EditorState) => void;
}

const useCodeMirror = <T extends Element>(
	props: Props
): [React.MutableRefObject<T | null>, EditorView?] => {
	const refContainer = useRef<T>(null);
	const [editorView, setEditorView] = useState<EditorView>();
	const { onChange } = props;

	useEffect(() => {
		if (!refContainer.current) return;

		const startState = EditorState.create({
			doc: props.initialDoc,
			extensions: [
				keymap.of([...defaultKeymap, indentWithTab]),
				lineNumbers(),
				highlightActiveLineGutter(),
				syntaxHighlighting(myHighlighting),
				history(),
				bracketMatching(),
				highlightActiveLine(),
				indentOnInput(),
				markdown({
					base: markdownLanguage,
					codeLanguages: languages,
					addKeymap: true,
				}),
				oneDark,
				transparentTheme,
				EditorView.lineWrapping,
				EditorView.updateListener.of((update) => {
					if (update.changes) {
						onChange && onChange(update.state);
					}
				}),
			],
		});

		const view = new EditorView({
			state: startState,
			parent: refContainer.current,
		});
		setEditorView(view);
	}, [refContainer]);

	return [refContainer, editorView];
};

export default useCodeMirror;
