import { observable, decorate } from "mobx";

export default class Store {

	items = [];
	limit = {
		rowSelect: {
			page : 1,
			maxRows: 10,
			totalRows: 0,
		}
	}

	constructor(items) {
		this.items = items;
		this.limit.rowSelect.totalRows = items.length
	}

	setPage(page) {
		this.limit.rowSelect.page = page;
	}

	prevPage() {
		if (this.limit.rowSelect.page > 1) {
			this.limit.rowSelect.page--;
		}
	}

	nextPage() {
		const rowSelect = this.limit.rowSelect;
		const page = rowSelect.page;
		const maxRows = rowSelect.maxRows;
		const totalRows = rowSelect.totalRows;
		if (isValidPage(page + 1, maxRows, totalRows)) {
			this.limit.rowSelect.page++;
		}
	}

	get getCurrentPage() {
		return this.limit.rowSelect.page;
	}

	get isFirstPage() {
		return this.limit.rowSelect.page === 1;
	}

	get isLastPage() {
		const totalPages = this.getTotalPages;
		const page = this.limit.rowSelect.page;
		return totalPages === page;
	}

	get getTotalPages() {
		const totalRows = this.limit.rowSelect.totalRows;
		const maxRows = this.limit.rowSelect.maxRows;
		return Math.ceil(totalRows / maxRows);
	}

	get getItems() {
		const rowSelect = this.limit.rowSelect;
		const page = rowSelect.page;
		const maxRows = rowSelect.maxRows;
		const totalRows = rowSelect.totalRows;

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
