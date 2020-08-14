import React, { Component } from 'react';

class Column extends Component {

	render() {
		return (
			<td>
				{
					this.props.value
				}
			</td>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default Column;
