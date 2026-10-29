import { Link } from "react-router-dom";
import "./BookCard.css";

const BookCard = ({ book }) => {
  const conditionClass = book.condition.toLowerCase().replaceAll(" ", "-");

  return (
    <article className="book-card">
      <div className="book-cover-wrap">
        <img
          className="book-cover"
          src={book.image}
          alt={`${book.title} book cover`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            event.currentTarget.parentElement.classList.add("book-cover-fallback");
          }}
        />
        {!book.image && <span className="book-fallback-icon" aria-hidden="true">📚</span>}
        <span className={`book-condition book-condition-${conditionClass}`}>
          {book.condition}
        </span>
      </div>

      <div className="book-card-content">
        <span className="book-category">{book.category}</span>
        <h3>{book.title}</h3>
        <p className="book-author">by {book.author}</p>
        <div className="book-card-footer">
          <strong className="book-price">₹{book.price}</strong>
          <Link className="book-details-button" to={`/books/${book.id}`}>
            View Details <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookCard;