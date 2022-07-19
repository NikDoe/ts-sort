import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([1000, 5, -100, 0, 50]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
