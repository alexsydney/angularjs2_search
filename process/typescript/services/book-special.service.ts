import {Injectable} from "angular2/core";
import {BookSpecialInterface} from "../interfaces/book-special.interface";
import {BookSpecialModel} from "../models/book-special.model";

@Injectable()
export class BookSpecialService {

  /**
   * Array of type special book (in object format defined in interface)
   * is fed with raw sample JSON data representations of the content.
   */

  // Use "name" data property to overlay the image instead of embedded image text
  specialBooks: BookSpecialInterface[] = [
    new BookSpecialModel(
      "Top 10 Australian Beaches",
      "10",
      "images/top.jpg",
      "Whitehaven Beach",
      "Whitesunday Island, Whitsunday Islands"
    )
  ];

  get() {
    return this.specialBooks;
  };

	// Constructor/Initialiser function to auto setup instance value of Component
  constructor() {}
}
