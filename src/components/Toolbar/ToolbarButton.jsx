import React, { Component } from 'react';

class ToolbarButton extends Component {

	render() {
		return (
			<button onClick={this.props.action}>{this.props.name}</button>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default ToolbarButton;
