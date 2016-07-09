import {Injectable} from "angular2/core";
import {BookSpecialInterface} from "./book-special.interface";
import {BookSpecialModel} from "./book-special.model";

// Best practice
@Injectable()
export class BookSpecialService {

  /**
   * Array of Type Special Book (in object format defined in Interface)
   * and fed with raw sample Data. JSON representations of the content.
   */

  // Use "name" data to overlay the image instead of static image text
  specialBooks: BookSpecialInterface[] = [
    new BookSpecialModel(
      "Top 10 Australian Beaches",
      "10",
      "images/top.jpg",
      "Whitehaven Beach",
      "Whitesunday Island, Whitsunday Islands"
    )
  ]; // Array of Special Book Type

  get() {
    return this.specialBooks;
  };

	// Constructor/Initialiser function to auto setup instance value of Component
  constructor() {}
}
