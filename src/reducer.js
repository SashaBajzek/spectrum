import { Map } from 'immutable';
import { initalActive, setActive } from './core';

export function reducer(state = Map(), action) {
	switch (action.type) {
		case 'INITAL_SET_ACTIVE':
			return initalActive(state, action.tab);
		case 'SET_ACTIVE':
			return setActive(state, action.tab);
		default:
			return state;
	}
}