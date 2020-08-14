import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

import Table from '../Table/Table';
import Toolbar from '../Toolbar/Toolbar';

class TableModel extends Component {

	render() {
		return (
			<div>
				<Toolbar />
				<Table model={this.props.model} items={this.props.store.getItems}/>
			</div>
		)
	}
}

export default inject('store')(observer(TableModel));
