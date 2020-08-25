import React, { Component } from 'react';

import ToolbarButton from '../Toolbar/ToolbarButton'

class Toolbar extends Component {
	render() {
		return (
			<div>
				<ToolbarButton name='Prev' action={this.props.prevAction}/>
				<ToolbarButton name='Next' action={this.props.nextAction}/>
			</div>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default Toolbar;
