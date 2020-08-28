import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

import prevPageImg from '../../images/prevPage.gif';
import prevPageDisabledImg from '../../images/prevPageDisabled.gif';

class PrevPageToolbarItem extends Component {

	prevPageHandler = () => {
		this.props.store.prevPage();
	}

	isFirstPage = () => {
		return this.props.store.getPage() == 1;
	}

	render() {
		const img = this.isFirstPage ? prevPageDisabledImg : prevPageImg;
		return (
			<button onClick={this.prevPageHandler}><img src={img} alt="my image"/></button>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default inject('store')(observer(PrevPageToolbarItem));
