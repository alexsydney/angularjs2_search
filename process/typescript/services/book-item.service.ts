import {Injectable} from "angular2/core";
import {BookItemInterface} from "../interfaces/book-item.interface";
import {BookItemModel} from "../models/book-item.model";

// Service to abstract common methods. Best practice use of @Injectable
@Injectable()
export class BookItemService {

  // Create instances of book item data model in accordance with defined interface type
  books: BookItemInterface[] = [
    new BookItemModel("El Pooch", "Alex Nelson", "images/elpooch.jpg", 1),
    new BookItemModel("The Flight", "Scott Masterson", "images/theflight.jpg", 2)
  ]; // Array of Book Type

  get() {
    return this.books;
  }

  add(newBook: BookItemInterface) {
    console.log("Added Book: " + newBook);

    this.books.push(newBook);
    // TODO - Automatically sort the books when added
    // this.books = [...this.books, newBook];
  };

  // Update star rating of book item
  updateRating(newRating: number, existingBook: BookItemInterface) {
    console.log("Added Updated Rating: " + newRating);

    // Obtain the array index of the book item for which we want to update its star rating
    const i = this.books.indexOf(existingBook);

    // Assign new rating as value of rating property for index
    this.books[i].rating = newRating;

    // console.log("Updated Books: " + JSON.stringify(this.books));
  };

  /**
   * Move array item from old index position to the
   * right-most position in given array
   */
  private move(array, oldIndex, newIndex) {
    if (newIndex >= array.length) {
        newIndex = array.length - 1;
    }
    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
    return array;
  }

  /**
   * Remove an item from the array by moving it to the
   * end of the array and then popping it. This avoids
   * leaving null elements in the array when using splice.
   */
  remove(bookToRemove: BookItemInterface) {
    console.log("Removing Book: " + bookToRemove);

    const i = this.books.indexOf(bookToRemove);

    this.move(this.books, i, this.books.length - 1);

    // console.log(JSON.stringify(this.books));

    this.books.pop();

    // this.books = [
    //   ...this.books.slice(0, i),
    //   bookToRemove,
    //   ...this.books.slice(i + 1)
    // ];
  }

  constructor() {}
}
