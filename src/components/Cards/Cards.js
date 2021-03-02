import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'

const Cards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    FakerApi();
  }, []);

  const FakerApi = async () => {
    await fetch("https://fakerapi.it/api/v1/books?_quantity=100")
      .then((response) => response.json())
      .then((data) => {
          let bookInfo = data.data
          console.log(bookInfo)
        setBooks(bookInfo);
        console.log('books ', books);
      });
  };

  return (
    <Auxiliary>
        {books.map((book, id) => {
            const {title, author, genre, description, image, isbn, published, publisher } = book

            return (
                <Card key={id} title={title} author={author} genre={genre} description={description} image={image} isbn={isbn} published={published} publisher={publisher} />
            )
        })}
    </Auxiliary>
  );
};

export default Cards;
