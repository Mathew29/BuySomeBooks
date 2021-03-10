import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import styles from "./Cards.module.css";
import Auxiliary from "../../../hoc/Auxiliary/Auxiliary";

const Cards = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    FakerApi();
  }, []);

  const FakerApi = async () => {
    // Create an image type array so that there will be random images
    const imageTypeArr = [
      "animal",
      "architecture",
      "nature",
      "people",
      "tech",
      "grayscale",
      "sepia",
    ];
    await fetch("https://fakerapi.it/api/v1/books?_quantity=20")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          let bookInfo = data.data;
          bookInfo.map((book, id) => {
            // Change image size and randomize the image
            let num = Math.floor(Math.random() * 6);
            book.image = "http://placeimg.com/220/220/" + imageTypeArr[num];
          });
          setBooks(bookInfo);
        }
      });
  };

  return (
    <Auxiliary>
      {books.map((book, id) => {
        const {
          title,
          author,
          genre,
          description,
          image,
          isbn,
          published,
          publisher,
        } = book;

        return (
          <li key={id} className={styles.Container}>
            <Card
              title={title}
              author={author}
              genre={genre}
              description={description}
              image={image}
              isbn={isbn}
              published={published}
              publisher={publisher}
            />
          </li>
        );
      })}
    </Auxiliary>
  );
};

export default Cards;
