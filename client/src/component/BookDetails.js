import React, { Component } from "react";
import { graphql } from "react-apollo";

import { getBookQuery } from "../queries/queries";

class BookDetails extends Component {
  displayBookDetails() {
    const { book } = this.props.data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>

          {book.author ? (
            <div>
              <p>{book.author.name}</p>
              <p>All books by this author</p>
              <ul className="other-books">
                {book.author.books.map(item => {
                  return <li key={item.id}>{item.name}</li>;
                })}
              </ul>
            </div>
          ) : (
            <div />
          )}
        </div>
      );
    } else {
      return <div>no book selected</div>;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div id="book-details">
          output details
          {this.displayBookDetails()}
        </div>
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
