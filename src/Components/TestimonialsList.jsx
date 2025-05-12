import './ComponentsStyle/TestimonialsList.scss'
import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';
import TestimonialsCard from './TestimonilasCard';

export default function TestimonialsList() {

    const { data: testimonials, loading, error } = useFetch(
        'https://gist.githubusercontent.com/AlinaLukosenkina/439f144c6a68f2569519d0748ddfe708/raw/12a8b0e2441c086412a06be11fd67d725c4a8656/clients.json',
        'clients',
        'img');

    console.log(testimonials);

    return (
        <div className="test-list">
            <DataHandler loading={loading} error={error}>
                {
                    testimonials.map(card => (
                        <TestimonialsCard
                            key={card.id}
                            imageSrc={card.imageSrc}
                            name={card.name}
                            text={card.text}
                            rating={card.rating}
                        />
                    ))
                }
            </DataHandler>
        </div>
    );
}