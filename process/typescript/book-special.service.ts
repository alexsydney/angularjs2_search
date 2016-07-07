import {BookSpecialInterface} from "./book-special.interface";

export class BookSpecialService {

  specialBooks: BookSpecialInterface[]; // Array of Special Book Type

  get() {
    return this.specialBooks;
  }

	// Constructor/Initialiser function to auto setup instance value of Component
  constructor() {

		// Data Structures with Strict Typing

		// Declare Variable books fed with Constant BOOKS
    this.specialBooks = SPECIAL_BOOKS;
  }

}

/**
 * Variable Constant SPECIAL_BOOKS is an Array of Type Special Book
 * (in object format defined in Interface) and fed with raw sample Data.
 * JSON representations of the content.
 */
let SPECIAL_BOOKS: BookSpecialInterface[] = [
  {
    "name": "Top 10 Australian Beaches",
    "number": "10",
    // Use "name" data to overlay the image instead of static image text
    "shortname": "images/top.jpg",
    "addressLine1": "Whitehaven Beach",
    "addressLine2": "Whitesunday Island, Whitsunday Islands"
  }
];