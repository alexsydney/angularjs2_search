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

// TypeScript compiles to JavaScript and creates the templates
// which provide the markup and populate the content on the page
@Component({
  // All styles in no styles out (default)
  encapsulation: ViewEncapsulation.Emulated,
  selector: "my-app",
  templateUrl: "partials/app.html",
  directives: [BookWelcomeComponent, BookItemComponent, BookSpecialComponent],
  pipes: [SearchPipe, KeysPipe, ArrayOfBookItemsPipe],
  // CSS Styles
  styles: [
  	// CSS Styles - Backtick usage
    `
      .contentWrapper {
        background-color: #dddddd;
        padding: 5px;
      }

      .navbar-menu-list h6 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
      }

      .form-control {
        width: 100px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 5px;
        clear: none;
      }
    `
  ],

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

  // Triggered when user changes drop-down to sort book items by "name" or "author"
  onBookSortChange(newValue) {
    this.selectedBookSort = newValue;
    // console.log(newValue);
  }

  // Iterate over these in app.html
  bookItems;
  bookSpecials;

} // end export
