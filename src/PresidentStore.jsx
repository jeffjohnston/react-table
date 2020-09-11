import { observable, decorate } from "mobx";
import _ from 'lodash';

export default class Store {

	originalItems = []; // keep the original copy
	items = [];
	limit = {
		page : 1,
		maxRows: 10,
		totalRows: 0,
		sortSet: [],
		filterSet: []
	}

	constructor(items) {
		this.originalItems = [...items];
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

	sortColumn(property) {
		console.log('sort column ' + property);

		const sortSet = [...this.limit.sortSet];
		const foundSort = _.remove(sortSet, function(sort) {
			return sort.property === property;
		});

		if (foundSort && foundSort.length > 0) {
			const order = foundSort[0].order;
			if (order === 'asc') {
				const sort = {property, order: 'desc'}
				sortSet.push(sort);
			}
		} else {
			const sort = {property, order: 'asc'}
			sortSet.push(sort);
		}

		this.limit.page = 1;
		this.limit.sortSet = sortSet;
	}

	filterColumn(property, value) {
		console.log('filter column ' + property + ' with value ' +  value);

		const filterSet = [...this.limit.filterSet];
		_.remove(filterSet, function(filter) {
			return filter.property === property;
		});

		if (!_.isEmpty(value)) {
			const filter = {property, value}
			console.log('added filter ' + property + ' with value ' +  value);
			filterSet.push(filter);
		}

 		// apply the filtering right away

		let cloneItems = [...this.originalItems];

		if (filterSet && filterSet.length > 0) {
			cloneItems = _.filter(cloneItems, item => {
				return _.every(filterSet, filter => {
					const value = item[filter.property];
					return value.toLowerCase().includes(filter.value.toLowerCase());
				})
			})
		}

		this.limit.page = 1;
		this.limit.filterSet = filterSet;
		this.items = cloneItems;
		this.limit.totalRows = cloneItems.length;
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

	get getSortSet() {
		return this.limit.sortSet;
	}

	get getFilterSet() {
		return this.limit.filterSet;
	}

	get getItems() {
		let cloneItems = [...this.items];

		// sort
		const sortSet = this.limit.sortSet;
		if (sortSet && sortSet.length > 0) {
			const properties = sortSet.map(sort => sort.property);
			const orders = sortSet.map(sort => sort.order);
			cloneItems = _.orderBy(cloneItems, properties, orders);
		}

		// figure out the pages
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
			const item = cloneItems[i];
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
	limit: observable
});
