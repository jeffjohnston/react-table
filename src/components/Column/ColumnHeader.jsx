import React, { Component } from 'react';
import {startCase} from 'lodash';

class ColumnHeader extends Component {

	render() {
		let title = this.props.column.title && this.props.column.title !== null ? this.props.column.title : this.props.column.property;
		title = startCase(title);
		return (
			<th>{title}</th>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default ColumnHeader;
