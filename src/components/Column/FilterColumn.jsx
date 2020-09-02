import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

class FilterColumn extends Component {

	filterColumnHandler = (e, property) => {
		if (e.key === 'Enter') {
			const value = e.target.value;
			this.props.store.filterColumn(property, value);
		}
	}

	render() {
		console.log('render header column');

		const property = this.props.column.property;

		return (
			<td><input name={property} onKeyDown={(e) => this.filterColumnHandler(e, property)}/></td>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default inject('store')(observer(FilterColumn));
