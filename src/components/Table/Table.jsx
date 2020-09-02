import React, { Component } from 'react';

import HeaderRow from '../Row/HeaderRow'
import FilterRow from '../Row/FilterRow'
import Row from '../Row/Row'
import classes from './Table.module.css'

class Table extends Component {
	render() {
		console.log('render table');
		return (
			<table className={classes.table} cellPadding={0} cellSpacing={0} border={0}>
				<thead>
					<HeaderRow columns={this.props.model.table.row.columns} items={this.props.items} />
				</thead>
				<tbody>
				<FilterRow key={'filter_'} columns={this.props.model.table.row.columns} />
				{this.props.items.map((item, index) => (
						<Row key={'row_' + item.id} columns={this.props.model.table.row.columns} item={item} rownum={index} />
					))}
				</tbody>
			</table>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default Table;
