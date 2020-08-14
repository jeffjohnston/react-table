import React, { Component } from 'react';

import HeaderRow from '../Row/HeaderRow'
import Row from '../Row/Row'

class Table extends Component {
	render() {
		return (
			<table border="1" width="100%">
				<thead>
					<HeaderRow columns={this.props.model.table.row.columns} items={this.props.items} />
				</thead>
				<tbody>
					{this.props.items.map(item => (
						<Row key={item.id} columns={this.props.model.table.row.columns} item={item} />
					))}
				</tbody>
			</table>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default Table;
