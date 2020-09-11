import React, { Component } from 'react';
import {inject, observer} from "mobx-react";

import prevPageImg from '../../images/prevPage.gif';
import prevPageDisabledImg from '../../images/prevPageDisabled.gif';
import classes from './PrevPageToolbarItem.module.css'

class PrevPageToolbarItem extends Component {

	prevPageHandler = (e) => {
		this.props.store.setToPrevPage();
		e.preventDefault();
	}

	render() {
		console.log('render prev page');
		const firstPage = this.props.store.isFirstPage;
		const img = firstPage ? prevPageDisabledImg : prevPageImg;
		return (
			<button
				className={classes.button}
				disabled={firstPage}
				onClick={this.prevPageHandler}>
					<img src={img} alt="Prev"/>
			</button>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default inject('store')(observer(PrevPageToolbarItem));
