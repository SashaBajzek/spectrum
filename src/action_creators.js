export function initalActive(tab) {
	return {
		type: 'INITAL_SET_ACTIVE',
		tab: tab
	};
}

export function setActive(tab) {
	return {
		type: 'SET_ACTIVE',
		tab: tab
	};
}