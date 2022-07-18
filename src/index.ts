class Sorter {
	constructor(public collection: number[]) {}

	sort(): void {
		const { length } = this.collection;
		let isSwapped = false;

		for (let i = 0; i < length; i++) {
			isSwapped = false;

			for (let j = 0; j < length; j++) {
				if (this.collection[j] > this.collection[j + 1]) {
					[this.collection[j], this.collection[j + 1]] = [
						this.collection[j + 1],
						this.collection[j],
					];
					isSwapped = true;
				}
			}

			if (!isSwapped) break;
		}
	}
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
