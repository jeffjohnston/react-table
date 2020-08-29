import React, { Component } from 'react';

import PrevPageToolbarItem from '../Toolbar/PrevPageToolbarItem'
import NextPageToolbarItem from '../Toolbar/NextPageToolbarItem'
import PageNumbersToolbarItem from '../Toolbar/PageNumbersToolbarItem'
import classes from './Toolbar.module.css'

class Toolbar extends Component {
	render() {
		return (
			<div className={classes.toolbar}>
				<PrevPageToolbarItem/>
				<PageNumbersToolbarItem/>
				<NextPageToolbarItem/>
			</div>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default Toolbar;
