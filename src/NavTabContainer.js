import { connect } from 'react-redux';
import { setActive } from './action_creators';
import NavTab from './NavTab';

const mapStateToProps = (state) => ({
	currentTab: state.get('currentTab')
});

const dispatchProps = { setActive };

export const NavTabContainer = connect(
	mapStateToProps,
	dispatchProps
)(NavTab);
