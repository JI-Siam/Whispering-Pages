import React from 'react';

const Book = ({book}) => {
    return (
        <div>

            <div className="card bg-base-200  w-96 shadow-sm">
  <figure     className= "w-full p-10 h-[500px]">
    <img
      src={book.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {book.bookName}
      <div className="badge badge-error">NEW</div>
    </h2>
    <p>By : {book.author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{book.rating}*</div>
      <div className="badge badge-outline">{book.category}</div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Book;