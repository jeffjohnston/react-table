import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

import prevPageImg from '../../images/prevPage.gif';
import prevPageDisabledImg from '../../images/prevPageDisabled.gif';

class PrevPageToolbarItem extends Component {

	prevPageHandler = () => {
		this.props.store.prevPage();
	}

	render() {
		console.log('render prev page');
		const page = this.props.store.getPage;
		const img = page == 1 ? prevPageDisabledImg : prevPageImg;
		return (
			<button onClick={this.prevPageHandler}>
				<img src={img} alt="my image"/>
			</button>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default inject('store')(observer(PrevPageToolbarItem));
