import React, { Component } from 'react';

import Column from '../Column/Column';
import classes from './Row.module.css'

class Row extends Component {

	render() {
		const item = this.props.item;
		const rowClassName = this.props.rownum % 2 === 0 ? classes.even : classes.odd;
		return (
			<tr className={rowClassName}>
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
