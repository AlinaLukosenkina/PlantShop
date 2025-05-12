import './ComponentsStyle/BestList.scss';
import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';
import BestCard from './BestCard';

export default function BestList() {

const { data: bestCards, loading, error } = useFetch(
                'https://gist.githubusercontent.com/AlinaLukosenkina/dfa590c05b751c2fb5693d4ea5eb807f/raw/9861c780825bcb95286cac5c0d4172a6ec357434/BestSelling.json', 
                'bestSelling', 
                'fileName');

            console.log(bestCards);

    return (
            <div className="bestList">
                <DataHandler>
                    {bestCards.map(card => (
                        <BestCard key={card.id} imageSrc={card.imageSrc} title={card.title}/>
                    ))}
                </DataHandler>
            </div>
    );
}