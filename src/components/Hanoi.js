import React from "react";

function Hanoi() {
	return <div className="hanoi">Hanoi</div>;
}

function getInitialState(n) {
	return [
		Array(n)
			.fill(0)
			.map((val, index) => index)
			.reverse(),
		[],
		[],
	];
}

function checkWin(state) {
	if (!state[0].length && !state[1].length) {
		// first two towers are empty
		return true;
	}

	return false;
}

export default Hanoi;
