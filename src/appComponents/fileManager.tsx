import React, { useState } from "react";
import "./fileManager.scss";

interface Props {
	handleClick: React.MouseEventHandler<HTMLButtonElement>;
	edit: boolean;
}

const fileManager: React.FC<Props> = (props) => {
	return (
		<div className="viewer">
			<div className="manager">
				<h1 className="title">Table of contents</h1>
				<ul className="list">
					<li className="item-active">Text Markdown test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
					<li className="item">Long list test.md</li>
				</ul>
			</div>
			<div className="create-container">
				<button className="create-button">Create new file +</button>
			</div>
		</div>
	);
};

export default fileManager;
