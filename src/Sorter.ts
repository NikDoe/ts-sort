export abstract class Sorter {
	abstract length: number;
	abstract compare(leftIndex: number, rightIndex: number): boolean;
	abstract swap(leftIndex: number, rightIndex: number): void;

	sort(): void {
		const { length } = this;
		let isSwapped = false;

		for (let i = 0; i < length; i++) {
			isSwapped = false;

			for (let j = 0; j < length; j++) {
				if (this.compare(j, j + 1)) {
					this.swap(j, j + 1);
					isSwapped = true;
				}
			}

			if (!isSwapped) break;
		}
	}
}
