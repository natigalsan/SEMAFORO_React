import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Modal = () => {
	return (
		<div className="container">
			<div className="semaforo">
				<div className="red-light" type="button"></div>
				<div className="yellow-light" type="button"></div>
				<div className="green-light" type="button"></div>
			</div>
			<div className="stick"></div>
		</div>
	);
};

export default Modal;
