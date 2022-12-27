//----Test File
import { Loader } from './loader';
//import { Products } from '../view/products/products';
import { FiltersType, FilterCollection, SortDirection } from '../../types/Filter';
import { Filter } from '../view/filter/filter';
import { StatusFilterItem } from '../../types/Filter';
enum Url {
    base = 'https://dummyjson.com',
    goods = '/products?limit=100',
    categories = '/products/categories',
}
const test = new Loader(Url);
export async function testFunction() {
    //(document.querySelector('.filter__checkbox-input_disabled') as HTMLInputElement).disabled = true;

    //test filter render
    const filterSection = new Filter(FiltersType.brand);
    document.querySelector('.filters')?.append(
        filterSection.draw([
            { filterName: 'Intel', status: StatusFilterItem.active, amount: 23 },
            { filterName: 'HTC', status: StatusFilterItem.disabled, amount: 0 },
            { filterName: 'Zyxel', status: StatusFilterItem.normal, amount: 153 },
        ])
    );

    //get data from api, render carts with goods
    //await test.loadGoods();

    //get raw data
    //const arr = test.rawData;

    //get arr with category and brands (this data we can use for render filters)
    //console.log(test.getList(arr, FiltersType.category));
    //console.log(test.getList(arr, FiltersType.brand));

    //get diapazone max min
    //console.log(test.getMaxMin(arr, FiltersType.price));
    //console.log(test.getMaxMin(arr, FiltersType.stock));

    //filter raw arr
    //console.log(test.getFilterData(arr, FiltersType.category, 'smartphones'));
    //console.log(test.getFilterData(arr, FiltersType.price, { min: 25, max: 125 }));

    //faceted filter
    //console.log(test.facetedFilter(arr, [{type: FiltersType.category, keys: ['smartphones', 'fragrances', ]}, {type: FiltersType.price, keys: {min: 10, max: 1500}}]))

    //sort data
    //console.log(test.sortData(arr, FiltersType.title, SortDirection.down))

    //search data
    //console.log(test.getSearchedData(arr, ['ap', '8', '23']))
}
