import { fromJS, toJS, Map } from 'immutable';

export function initalActive(state, tab) {
	return state.set('currentTab',
									fromJS(tab));
}

export function setActive(state, tab) {
	return state.set('currentTab',
									fromJS(tab));
}