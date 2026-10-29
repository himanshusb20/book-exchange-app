import Navbar from '../components/Navbar.jsx'
import BookCard from '../components/BookCard.jsx'
import { books } from '../data/books.js'
import { useState } from 'react'
import './Home.css'

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedCondition, setSelectedCondition] = useState("All")
  const [sortOrder, setSortOrder] = useState("default")

  const categories = [...new Set(books.map((book) => book.category))]
  const conditions = [...new Set(books.map((book) => book.condition))]

  const filteredBooks = books
    .filter((book) => {
      const search = searchTerm.toLowerCase()
      return book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search)
    })
    .filter((book) => selectedCategory === "All" || book.category === selectedCategory)
    .filter((book) => selectedCondition === "All" || book.condition === selectedCondition)
    .slice()
    .sort((a, b) => {
      if (sortOrder === "low-to-high") return a.price - b.price
      if (sortOrder === "high-to-low") return b.price - a.price
      return a.id - b.id
    })

  return (
    <div className="home-page">
      <Navbar />

      <section className="home-hero">
        <div className="hero-decoration hero-decoration-one" />
        <div className="hero-decoration hero-decoration-two" />
        <div className="home-hero-content">
          <span className="hero-eyebrow">Made for students</span>
          <h1>Find your next book.<br />Give old stories a new chapter.</h1>
          <p>Buy, sell and exchange textbooks with fellow students without spending a fortune.</p>
          <label className="home-search-box">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search by book title or author..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>
        </div>
      </section>

      <main className="home-catalog">
        <div className="catalog-heading">
          <div>
            <span className="catalog-kicker">Student marketplace</span>
            <h2>Explore Books</h2>
            <p>Your next study companion is waiting.</p>
          </div>
          <span className="books-count">{filteredBooks.length} books found</span>
        </div>

        <div className="book-filters">
          <label>
            <span>Category</span>
            <select value={selectedCategory} onChange={(event) => setSelectedCategory(event.target.value)}>
              <option value="All">All Categories</option>
              {categories.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </label>

          <label>
            <span>Condition</span>
            <select value={selectedCondition} onChange={(event) => setSelectedCondition(event.target.value)}>
              <option value="All">All Conditions</option>
              {conditions.map((condition) => <option key={condition} value={condition}>{condition}</option>)}
            </select>
          </label>

          <label>
            <span>Price</span>
            <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)}>
              <option value="default">Default Order</option>
              <option value="low-to-high">Price: Low to High</option>
              <option value="high-to-low">Price: High to Low</option>
            </select>
          </label>
        </div>

        {filteredBooks.length > 0 ? (
          <div className="books-grid">
            {filteredBooks.map((book) => <BookCard key={book.id} book={book} />)}
          </div>
        ) : (
          <div className="no-books">
            <span aria-hidden="true">📖</span>
            <h3>No books found</h3>
            <p>Try another title, author, category or condition.</p>
          </div>
        )}
      </main>
    </div>
  )
}

export default Home