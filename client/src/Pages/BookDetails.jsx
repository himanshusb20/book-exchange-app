import {Link, useParams} from 'react-router-dom'
import {books} from '../data/books'

const BookDetails = ()=>{
    const {id} = useParams()
    const book = books.find((book) => book.id === Number(id))

    if(!book){
        return(
            <div className='mx-auto max-w-4xl p-8'>
                <h1 className='text-2xl font-bold'>Book not found</h1>
                <Link to="/" className='mt-4 inline-block text-green-700'>
                    Back to Home
                </Link>
            </div>
        )
    }

    return(
        <div className='mx-auto max-w-4xl px-6 py-12'>
            <Link to='/' className='text-sm font-medium text-green-700'>
                Back to books
            </Link>

            <div className='mt-6 grid gap-8 rounded-2xl border border-gray-200 p-6 sm:grid-cols-2'>
                <div className='flex min-h-64 items-center justify-center overflow-hidden rounded-xl bg-green-50'>
                    {book.image ? (
                        <img
                            className='h-full w-full object-cover'
                            src={book.image}
                            alt={`${book.title} book cover`}
                        />
                    ) : (
                        <span className='text-8xl' aria-hidden='true'>📚</span>
                    )}
                </div>

                <div>
                    <p className='text-sm font-medium text-green-700'>
                        {book.category}
                    </p>

                    <h1 className='mt-2 text-3xl font-bold text-gray-900'>
                        {book.title}
                    </h1>

                    <p className='mt-3 text-gray-600'>by {book.author}</p>

                    <p className='mt-6 text-gray-600'>
                        Condition: {book.condition}
                    </p>

                    <p className='mt-4 text-2xl font-bold text-green-700'>
                        ₹{book.price}
                    </p>

                    <button className='mt-6 w-full rounded-lg bg-green-700 px-5 py-3 font-medium text-white hover:bg-green-800'>
                        Contact Seller
                    </button>

                </div>
            </div>
        </div>
    )

}

export default BookDetails