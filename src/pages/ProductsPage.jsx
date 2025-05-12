import { useState } from 'react';
import PlantCardList from '../Components/PlantCardList';
import SecondTitle from '../Components/SecondTitle';
import './pageStyle/ProductsPage.scss';
import CategoryFilter from '../Components/CategoryFilter';


export default function ProductsPage() {

    const [sortType, setSortType] = useState('deals');

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    }

    return (
        <>
            <SecondTitle big='Shop' small='Find the perfect plant for your space' />
            <div className="wrapper products-container">
                <aside className="aside">
                    <CategoryFilter />
                </aside>

                <div className="cards-container">
                    <div className="sort-block">
                        <label htmlFor='sort'>Sort by</label>
                        <select className="sort" id='sort' value={sortType} onChange={handleSortChange}>
                            <option value="hot">Popular</option>
                            <option value="deals">Biggest discount</option>
                            <option value="price-high">Price (high to low)</option>
                            <option value="price-low">Price (low to high)</option>
                        </select>
                    </div>
                    <PlantCardList filterType={sortType} />
                </div>
            </div>
        </>
    )
}