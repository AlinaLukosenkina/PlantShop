import './ComponentsStyle/CategoriesList.scss'
import DataHandler from '../utils/DataHandler';
import CategoryCard from './CategoryCard';
import useCategories from '../hooks/useCategories';

export default function CategoriesList({url, folder, imgKey}) {

    const { categories, loading, error } = useCategories();

    // const { data: categories, loading, error } = useFetch('https://gist.githubusercontent.com/AlinaLukosenkina/053cec8f2ff150b6b10be1147311df4d/raw/d8bddf8a7aa4be43e5afc27fe6c2a21daff58768/data-category.json', 'categories', 'fileName');

    // console.log(data);

    return (
        <div className="categories-list">
            <DataHandler
                loading={loading}
                error={error}
            >
                {categories.map(elem => (
                    <CategoryCard imageSrc={elem.imageSrc} title={elem.title} key={elem.id}></CategoryCard>
                ))}
            </DataHandler>
        </div>
    );
}