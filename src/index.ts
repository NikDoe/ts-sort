import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

const charactersCollection = new CharactersCollection('ЛОТ лытдта');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
