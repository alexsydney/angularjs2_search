import {BookInterface} from "./book.interface";

export class BookItemService {

  books: BookInterface[]; // Array of Book Type

  get() {
    return this.books;
  }

  add(newBook) {
    console.log("Added Book: " + newBook);
    this.books.push(newBook);
  };

	// Constructor/Initialiser function to auto setup instance value of Component
  constructor() {

		// Data Structures with Strict Typing

		// Declare Variable books fed with Constant BOOKS
    this.books = BOOKS;
  }

}

/**
 * Variable Constant BOOKS is an Array of Type Book
 * (in object format defined in Interface) and fed with raw sample Data.
 * JSON representations of the content.
 */
let BOOKS: BookInterface[] = [
  {
    "name": "El Pooch",
    "shortname": "images/elpooch.jpg",
    "author": "Alex Nelson"
  },
  {
    "name": "The Flight",
    "shortname": "images/theflight.jpg",
    "author": "Scott Masterson"
  }
];