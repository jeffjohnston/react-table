import React, { Component } from 'react';
import {inject, observer} from "mobx-react";
import classes from './PageNumbersToolbarItem.module.css'

class PageNumbersToolbarItem extends Component {

	setPageHandler = (e, page) => {
		this.props.store.setPage(page);
		e.preventDefault();
	}

	render() {
		console.log('render page');
		const totalPages = this.props.store.getTotalPages;
		const currentPage = this.props.store.getCurrentPage;

		const items = []

		let i = 1;
		for(i; i <= totalPages; i++){
			const page = i;
			let css = classes.linkButton;
			if (currentPage === page) {
				css=[classes.linkButton, classes.removeTextDecoration].join(' ')
			}

			items.push(
				<button
					key={i}
					type="button"
					className={css}
					onClick={(e) => this.setPageHandler(e, page)}>
					{i}
				</button>
			);
		}

		return (
			<span>
				{items}
			</span>
		);
	}
}

// eslint-disable-next-line import/no-default-export
export default inject('store')(observer(PageNumbersToolbarItem));
