import {Injectable} from "angular2/core";
import {BookItemInterface} from "../interfaces/book-item.interface";
import {BookItemModel} from "../models/book-item.model";

// Best practice
@Injectable()
export class BookItemService {

  books: BookItemInterface[] = [
    new BookItemModel("El Pooch", "Alex Nelson", "images/elpooch.jpg"),
    new BookItemModel("The Flight", "Scott Masterson", "images/theflight.jpg")
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

  constructor() {}
}
