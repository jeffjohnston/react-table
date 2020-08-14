import React, { Component } from 'react';

import ToolbarButton from '../Toolbar/ToolbarButton'

class Toolbar extends Component {
	render() {
		return (
			<div>
				<ToolbarButton name='Prev'/>
				<ToolbarButton name='Next'/>
			</div>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default Toolbar;
