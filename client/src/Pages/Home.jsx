import Navbar from '../components/Navbar.jsx'
import BookCard from '../components/BookCard.jsx'
import { useState } from 'react';

const books = [
  {
    id: 1,
    title: "Clean Code",
    author: "Robert C. Martin",
    condition: "Like New",
    category: "Programming",
    price: 350,
  },
  {
    id: 2,
    title: "Let Us C",
    author: "Yashavant Kanetkar",
    condition: "Good",
    category: "Programming",
    price: 180,
  },
  {
    id: 3,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    condition: "Used",
    category: "Computer Science",
    price: 500,
  },
  {
    id: 4,
    title: "The Pragmatic Programmer",
    author: "David Thomas",
    condition: "Like New",
    category: "Programming",
    price: 300,
  },
];

const Home = ()=>{

    const [searchTerm, setSearchTerm] = useState("");

    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedCondition, setSelectedCondition] = useState("All");
    const [sortOrder, setSortOrder] = useState("default");

    const filteredBooks = books.filter((book)=>{

        const search = searchTerm.toLowerCase();
        return(
            book.title.toLowerCase().includes(search)||
            book.author.toLowerCase().includes(search)
        );
    })
    .filter((book)=>{
        return(
            selectedCategory === "All" ||
            book.category === selectedCategory
        );
    })
    .filter((book) => {
        return(
            selectedCondition === "All" ||
            book.condition === selectedCondition
        );
    })
    .sort((a, b) =>{
        if (sortOrder === "low-to-high"){
            return a.price - b.price;
        }
        if (sortOrder === "high-to-low"){
            return b.price - a.price;
        }

        return a.id - b.id;
    })

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
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
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
                        {filteredBooks.length} books found
                    </span>
                </div>

                {/* Book filter */}
                <div className='mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3'>

                    {/* Category filter */}
                    <select
                        value={selectedCategory}
                        onChange={(event) => setSelectedCategory(event.target.value)}
                        className="rounded-lg border border-gray-300 bg-white p-3"
                    >
                        <option value="All">All Categories</option>
                        <option value="Programming">Programming</option>
                        <option value="Computer Science">Computer Science</option>
                    </select>

                    {/* Condition filter */}
                    <select
                        value={selectedCondition}
                        onChange={(event) => setSelectedCondition(event.target.value)}
                        className="rounded-lg border border-gray-300 bg-white p-3"
                    >
                        <option value="All">All Conditions</option>
                        <option value="Like New">Like New</option>
                        <option value="Good">Good</option>
                        <option value="Used">Used</option>
                    </select>

                    {/* Price sorting */}
                    <select
                        value={sortOrder}
                        onChange={(event) => setSortOrder(event.target.value)}
                        className="rounded-lg border border-gray-300 bg-white p-3"
                    >
                        <option value="default">Default Order</option>
                        <option value="low-to-high">Price: Low to High</option>
                        <option value="high-to-low">Price: High to Low</option>
                    </select>
                    
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {filteredBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>

                {filteredBooks.length === 0 && (
                    <p className='mt-8 text-center text-gray-500'>
                        No books found. Try another title or author.
                    </p>
                )}
            </section>
        </div>
    )
}

export default Home