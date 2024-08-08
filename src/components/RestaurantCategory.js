import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {

    const handleClick = () => {
        setshowIndex();
    };

    return (
        <div>
            {/* Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 rounded-lg">
                <div className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg text-gray-800">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>
                        <FontAwesomeIcon
                            icon={showItems ? faChevronUp : faChevronDown}
                            className={`transition-transform ${showItems ? 'rotate-180' : ''} text-gray-600`}
                        />
                    </span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
            {/* Accordion Body */}
        </div>
    );
};

export default RestaurantCategory;
