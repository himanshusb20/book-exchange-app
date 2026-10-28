import Navbar from '../components/Navbar.jsx'
import BookCard from '../components/BookCard.jsx'

const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    condition: "Like New",
    price: 350,
  },
  {
    id: 2,
    title: "Let Us C",
    author: "Yashavant Kanetkar",
    condition: "Good",
    price: 180,
  },
  {
    id: 3,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    condition: "Used",
    price: 500,
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    condition: "Like New",
    price: 300,
  },
];

const Home = ()=>{
    return(
        <div className='min-h-screen bg-gray-50'>
            <Navbar/>

            <section className='bg-green-50 px-6 py-20 text-center'>
                <p className='mb-3 text-sm font-semibold uppercase tracking-widest text-green-700'>
                    Made for students
                </p>

                <h1 className='text-4xl font-bold leading-tight text-gray-900 md-text-5xl'>
                    Find your next book.
                    <br></br>
                    Give your old ones new life.
                </h1>

                <p className='mx-auto mt-5 max-w-xl text-gray-600'>
                    Buy, Sell, and Exchange textbooks with fellow students without spending a fortune.
                </p>

                <input
                    type='text'
                    placeholder='Search by book title or author...'
                    className='mt-8 w-full max-w-lg rounded-xl border border-grey-300 bg-white px-5 py-4 outline-none focus:border-green-600'
                />
            </section>
            <section className="px-8 py-12">
                <div className="mb-8 flex items-end justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900">
                            Explore Books
                        </h2>

                        <p className="mt-2 text-gray-600">
                            Your next study companion is waiting.
                        </p>
                    </div>

                    <span className="text-sm text-gray-500">
                        {books.length} books listed
                    </span>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home