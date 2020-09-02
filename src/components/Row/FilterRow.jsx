import React, { Component } from 'react';

import FilterColumn from '../Column/FilterColumn';
import classes from './FilterRow.module.css'

class FilterRow extends Component {
	render() {
		return (
			<tr className={classes.filter}>
				{this.props.columns.map(column => <FilterColumn key={column.property} column={column}/>)}
			</tr>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default FilterRow;
