import React, { useState } from "react";

export function Home() {
	const [selected, setSelected] = useState("");

	const changeColor = color => {
		if (color == selected) {
			setSelected("");
		} else {
			setSelected(color);
		}
	};
	return (
		<>
			<div className="trafficTop"></div>
			<div className="trafficBody">
				<div
					className={selected !== "red" ? "red" : "red selected"}
					onClick={() => changeColor("red")}></div>
				<div
					className={
						selected !== "yellow" ? "yellow" : "yellow selected"
					}
					onClick={() => changeColor("yellow")}></div>
				<div
					className={
						selected !== "green" ? "green" : "green selected"
					}
					onClick={() => changeColor("green")}></div>
			</div>
		</>
	);
}
