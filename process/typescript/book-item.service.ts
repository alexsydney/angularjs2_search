import {Injectable} from "angular2/core";
import {BookItemInterface} from "./book-item.interface";
import {BookItemModel} from "./book-item.model";

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

  add(newBook) {
    console.log("Added Book: " + newBook);
    this.books.push(newBook);
  };

  constructor() {}
}
