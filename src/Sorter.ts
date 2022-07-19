import { NumbersCollection } from './NumbersCollection';

export class Sorter {
	constructor(public collection: NumbersCollection) {}

	sort(): void {
		const { length } = this.collection;
		let isSwapped = false;

		for (let i = 0; i < length; i++) {
			isSwapped = false;

			for (let j = 0; j < length; j++) {
				if (this.collection.compare(j, j + 1)) {
					this.collection.swap(j, j + 1);
					isSwapped = true;
				}
			}

			if (!isSwapped) break;
		}
	}
}
