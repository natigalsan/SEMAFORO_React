import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Modal = () => {
	const [On, setOn] = useState(0);

	return (
		<div className="container">
			<div className="semaforo">
				<div
					className="red"
					type="button"
					onClick={() => {
						if (On > 0) {
							setOn(true);
						}
					}}></div>
				<div
					className="yellow"
					type="button"
					onClick={() => setOn(false)}></div>
				<div className="green" type="button"></div>
			</div>
			<div className="stick"></div>
		</div>
	);
};

export default Modal;
