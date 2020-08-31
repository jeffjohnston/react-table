import React, { Component } from 'react';
import {startCase} from 'lodash';
import {inject, observer} from "mobx-react";

class HeaderColumn extends Component {

	sortColumnHandler = (property, order) => {
		const sort = {property, order}
		this.props.store.sortColumn(sort);
	}


	render() {
		console.log('render header column');
		const property = this.props.column.property;
		const title = this.props.column.title;
		let name = title && title !== null ? title : property;
		name = startCase(name);
		return (
			<th onClick={() => this.sortColumnHandler(property, 'asc')}>{name}</th>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default inject('store')(observer(HeaderColumn));
