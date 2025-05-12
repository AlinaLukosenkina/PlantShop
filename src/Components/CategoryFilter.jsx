import useCategories from '../hooks/useCategories'
import './ComponentsStyle/CategoryFilter.scss'

export default function CategoryFilter() {

    const { categories } = useCategories();

    return (
        <div className="category-filter">
            <details>
                <summary>
                    By categories
                </summary>
                <div className="category-dropdown">
                    <label>
                        <input type='checkbox' />
                        All
                    </label>
                    {categories.map(category => (
                        <label key={category.id}>
                            <input type='checkbox' />
                            {category.title}
                        </label>
                    ))}
                </div>
            </details>
        </div>
    )
}
