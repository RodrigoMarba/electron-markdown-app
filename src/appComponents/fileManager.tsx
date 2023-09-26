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
					<li className="item-active">Text Markdown example</li>
					<li className="item" style={{ display: "none" }}>
						Text example 2
					</li>
				</ul>
			</div>
			<div className="create-container" style={{ display: "none" }}>
				<button className="create-button" disabled>
					to do +
				</button>
			</div>
		</div>
	);
};

export default fileManager;
