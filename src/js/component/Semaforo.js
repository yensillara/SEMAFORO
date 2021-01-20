import React, { useState } from "react";

export function Semaforo() {
	const [light, setLight] = useState("");

	const redON = e => {
		if (light != "red") {
			setLight("red");
		} else setLight("");
	};
	const yellowON = e => {
		if (light != "yellow") {
			setLight("yellow");
		} else setLight("");
	};
	const greenON = e => {
		if (light != "green") {
			setLight("green");
		} else setLight("");
	};
	return (
		<div className="container text-center mt-5 d-flex flex-column aling-items-center">
			<div className="cable" />
			<div className="luces">
				<div
					className={light == "red" ? "red lightON" : "red"}
					onClick={redON}
				/>
				<div
					className={light == "yellow" ? "yellow lightON" : "yellow"}
					onClick={yellowON}
				/>
				<div
					className={light == "green" ? "green lightON" : "green"}
					onClick={greenON}
				/>
			</div>
		</div>
	);
}
