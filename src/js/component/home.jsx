import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Modal = () => {
	const [On, setOn] = useState("");
	return (
		<div className="container">
			<div className="semaforo">
				<input
					className={On == "red" ? " red red-shadow" : "red "}
					type="button"
					onClick={() => {
						setOn("red");
					}}></input>
				<div
					className={
						On == "yellow" ? "yellow yellow-shadow" : "yellow"
					}
					type="button"
					onClick={() => setOn("yellow")}></div>
				<div
					className={On == "green" ? " green green-shadow" : "green "}
					type="button"
					onClick={() => setOn("green")}></div>
			</div>
			<div className="stick"></div>
		</div>
	);
};

export default Modal;
