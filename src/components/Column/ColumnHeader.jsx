import React, { Component } from 'react';

class ColumnHeader extends Component {

	render() {
		return (
			<th>
				{
					this.props.column.title && this.props.column.title !== null ? this.props.column.title : this.props.column.property
				}
			</th>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default ColumnHeader;
