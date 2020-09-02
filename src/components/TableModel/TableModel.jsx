import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

import Table from '../Table/Table';
import Toolbar from '../Toolbar/Toolbar';

class TableModel extends Component {

	render() {
		console.log('render table model');
		return (
			<div>
				<form>
				<Toolbar/>
				<Table
					model={this.props.model}
					items={this.props.store.getItems}
				/>
				</form>
			</div>
		)
	}
}

export default inject('store')(observer(TableModel));
