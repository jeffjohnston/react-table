import { observable, decorate } from "mobx";

export default class Store {

	items = [];
	limit = {
		page : 1,
		maxRows: 10,
		totalRows: 0,
		sortSet: [],
		filterSet: []
	}

	constructor(items) {
		this.items = items;
		this.limit.totalRows = items.length
	}

	setPage(page) {
		this.limit.page = page;
	}

	setToPrevPage() {
		if (this.limit.page > 1) {
			this.limit.page--;
		}
	}

	setToNextPage() {
		const page = this.limit.page;
		const maxRows = this.limit.maxRows;
		const totalRows = this.limit.totalRows;
		if (isValidPage(page + 1, maxRows, totalRows)) {
			this.limit.page++;
		}
	}

	sortColumn(sort) {
		console.log(sort);
		this.limit.sortSet.push(sort);
	}

	get getCurrentPage() {
		return this.limit.page;
	}

	get isFirstPage() {
		return this.limit.page === 1;
	}

	get isLastPage() {
		const totalPages = this.getTotalPages;
		const page = this.limit.page;
		return totalPages === page;
	}

	get getTotalPages() {
		const totalRows = this.limit.totalRows;
		const maxRows = this.limit.maxRows;
		return Math.ceil(totalRows / maxRows);
	}

	get getItems() {
		const page = this.limit.page;
		const maxRows = this.limit.maxRows;
		const totalRows = this.limit.totalRows;

		let rowStart = (page - 1) * maxRows;
		let rowEnd = rowStart + maxRows;
		if (rowEnd > totalRows) {
			rowEnd = totalRows;
		}

		let results = [];

		let i;
		for (i = rowStart; i < rowEnd; i++) {
			const item = this.items[i];
			results.push(item);
		}

		return results;
	}
}

const isValidPage = (page, maxRows, totalRows) => {
	if (page === 1) {
		return true;
	}

	const rowStart = (page - 1) * maxRows;
	let rowEnd = rowStart + maxRows;
	if (rowEnd > totalRows) {
		rowEnd = totalRows;
	}
	return rowEnd > rowStart;
}

decorate(Store, {
	items: observable.ref,
	limit: observable
});
