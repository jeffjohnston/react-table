import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

import nextPageDisabledImg from "../../images/nextPageDisabled.gif";
import nextPageImg from "../../images/nextPage.gif";

class NextPageToolbarItem extends Component {

	nextPageHandler = () => {
		this.props.store.nextPage();
	}

	render() {
		console.log('render next page');
		const lastPage = this.props.store.isLastPage;
		const img = lastPage ? nextPageDisabledImg : nextPageImg;
		return (
			<button disabled={lastPage} onClick={this.nextPageHandler}>
				<img src={img} alt="Next"/>
			</button>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default inject('store')(observer(NextPageToolbarItem));
