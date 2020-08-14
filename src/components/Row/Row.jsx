import React, { Component } from 'react';

import Column from '../Column/Column';

class Row extends Component {
	render() {
		const item = this.props.item;
		return (
			<tr>
				{this.props.columns.map(column => {
					const value = item[column.property];
					return <Column key={column.property} column={column} value={value}/>
				})}
			</tr>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default Row;
