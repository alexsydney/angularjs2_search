import {Component} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {BookWelcomeComponent} from "./book-welcome.component";
import {BookItemComponent} from "./book-item.component";
import {BookSpecialComponent} from "./book-special.component";
import {BookItemService} from "../services/book-item.service";
import {BookSpecialService} from "../services/book-special.service";
import {SearchPipe} from "../pipes/search.pipe";
import {KeysPipe} from "../pipes/keys.pipe";
import {ArrayOfBookItemsPipe} from "../pipes/array-of-book-items.pipe";

@Component({

  // Emulated is for all styles in and no styles out of component (default)
  encapsulation: ViewEncapsulation.Emulated,
  selector: "my-app",
  templateUrl: "partials/app.html",
  directives: [BookWelcomeComponent, BookItemComponent, BookSpecialComponent],
  pipes: [SearchPipe, KeysPipe, ArrayOfBookItemsPipe],

  // CSS Styles in External Stylesheet
  styleUrls: [
    "css/app.css"
  ]
})

export class AppComponent {

  // Declare with default value
  selectedBookSort = "NAME";

	// Constructor/Initialiser function to auto setup instance value of Component
  constructor(private bookItemService: BookItemService, private bookSpecialService: BookSpecialService) {}

  ngOnInit() {
    this.bookItems = this.bookItemService.get();
    this.bookSpecials = this.bookSpecialService.get();
  }

  onUpdateRating(value, bookItem) {
    console.log("Receiving Emitted Event to Update Rating: " + value + ".. for Book Item: " + bookItem);
    this.bookItemService.updateRating(value, bookItem);
  }

  onBookItemDeleted(bookItem) {
    console.log("Receiving Emitted Event to Delete: " + bookItem);

    this.bookItemService.remove(bookItem);
  }

  // Triggered when user changes drop-down to sort book items by "name" or "author"
  onBookSortChange(newValue) {
    this.selectedBookSort = newValue;
    // console.log(newValue);
  }

  // Iterate over these in app.html
  bookItems;
  bookSpecials;

} // end export
