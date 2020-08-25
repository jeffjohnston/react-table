import React, { Component } from 'react';
import { inject, observer } from "mobx-react";

import Table from '../Table/Table';
import Toolbar from '../Toolbar/Toolbar';

class TableModel extends Component {

	prevHandler = () => {
		this.props.store.prevPage();
	}

	nextHandler = () => {
		this.props.store.nextPage();
	}

	render() {
		return (
			<div>
				<Toolbar
					prevAction={this.prevHandler}
					nextAction={this.nextHandler}
				/>
				<Table
					model={this.props.model}
					items={this.props.store.getItems}
				/>
			</div>
		)
	}
}

export default inject('store')(observer(TableModel));
