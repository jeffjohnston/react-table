import React, { Component } from 'react';

import PrevPageToolbarItem from '../Toolbar/PrevPageToolbarItem'
import NextPageToolbarItem from '../Toolbar/NextPageToolbarItem'

class Toolbar extends Component {
	render() {
		return (
			<div>
				<PrevPageToolbarItem/>
				<NextPageToolbarItem/>
			</div>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default Toolbar;
