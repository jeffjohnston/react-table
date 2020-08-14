import { observable, action, computed, decorate } from "mobx";

export default class Store {

	items = [];

	constructor(items) {
		console.log('building the store');
		this.items = items;
	}

	get getItems() {
		return this.items;
	}
}

decorate(Store, {
	items: observable.ref
});
