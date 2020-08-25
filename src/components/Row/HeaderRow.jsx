import React, { Component } from 'react';

import ColumnHeader from '../Column/ColumnHeader';
import classes from './HeaderRow.module.css'

class HeaderRow extends Component {
	render() {
		return (
			<tr className={classes.header}>
				{this.props.columns.map(column => <ColumnHeader key={column.property} column={column}/>)}
			</tr>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default HeaderRow;
