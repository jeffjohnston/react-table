import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

import {startCase} from 'lodash';

import sortAsc from "../../images/sortAsc.gif";
import sortDesc from "../../images/sortDesc.gif";

class HeaderColumn extends Component {

	sortColumnHandler = (property) => {
		this.props.store.sortColumn(property);
	}


	render() {
		console.log('render header column');

		const property = this.props.column.property;
		const title = this.props.column.title;
		let name = title && title !== null ? title : property;
		name = startCase(name);

		const sortSet = this.props.store.getSortSet;
		const img = sortSet
			.filter(sort => sort.property === property)
			.map(sort => sort.order === 'asc' ? sortAsc : sortDesc)[0];

		return (
			<th onClick={() => this.sortColumnHandler(property)}>{img && <img src={img} alt="sort"/>} {name}</th>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default inject('store')(observer(HeaderColumn));
