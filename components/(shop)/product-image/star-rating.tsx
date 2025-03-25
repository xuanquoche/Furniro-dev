import { FaStar, FaRegStar } from 'react-icons/fa';

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1 text-yellow-500">
            {[...Array(5)].map((_, index) => (
                <span key={index}>{index < rating ? <FaStar /> : <FaRegStar />}</span>
            ))}
        </div>
    );
}

export default StarRating;
