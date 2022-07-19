import { Sortable } from './Sorter';

export class CharactersCollection implements Sortable {
	constructor(public data: string) {}

	get length(): number {
		return this.data.length;
	}

	compare(leftIndex: number, rightIndex: number): boolean {
		return this.data[leftIndex]?.toLowerCase() > this.data[rightIndex]?.toLowerCase();
	}

	swap(): void {
		const characters = this.data.split('').sort((a, b) => a.localeCompare(b));
		this.data = characters.join('').trim();
	}
}
