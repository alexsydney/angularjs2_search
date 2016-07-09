import {Injectable} from "@angular/core";
import {BookItemInterface} from "../interfaces/book-item.interface";
import {BookItemModel} from "../models/book-item.model";

// Best practice
@Injectable()
export class BookItemService {

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
    // TODO - Added books are automatically sorted
    // this.books = [...this.books, newBook];
  };

  updateRating(newRating: number, existingBook: BookItemInterface) {
    console.log("Added Updated Rating: " + newRating);

    const i = this.books.indexOf(existingBook);

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
