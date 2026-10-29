import { Link } from "react-router-dom";

const BookCard = ({book})=>{
    return(
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex h-40 items-center justify-center bg-green-50 text-5xl">📚</div>
            <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">
                    {book.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    by {book.author}
                </p>
                
                <p className="mt-2 text-xs font-medium text-green-700">
                    {book.category}
                </p>
                
                <p className="mt-3 text-sm text-gray-600">
                    Condition: {book.condition}
                </p>

                <div className="m-5 flex item-center justify-between">
                    <span className="text-lg font-bold text-green-700">
                        ₹{book.price}
                    </span>

                    <Link
                        to={`/books/${book.id}`}
                        className="rounded-lg bg-green-700 px-3 py-2 text-sm text-white hover:bg-green-800"
                    >
                        View Details
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default BookCard;