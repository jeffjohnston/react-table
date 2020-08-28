import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

import img from '../../images/nextPage.gif';

class NextPageToolbarItem extends Component {

	nextPageHandler = () => {
		this.props.store.nextPage();
	}

	render() {
		return (
			<button onClick={this.nextPageHandler}><img src={img} alt="my image"/></button>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default inject('store')(observer(NextPageToolbarItem));
