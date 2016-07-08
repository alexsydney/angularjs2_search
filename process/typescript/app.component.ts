import {Component} from "angular2/core";
import {BookWelcomeComponent} from "./book-welcome.component";
import {BookItemComponent} from "./book-item.component";
import {BookSpecialComponent} from "./book-special.component";
import {BookItemService} from "./book-item.service";
import {BookSpecialService} from "./book-special.service";
import {SearchPipe} from "./search.pipe";

// TypeScript compiles to JavaScript and creates the templates
// which provide the markup and populate the content on the page
@Component({
  selector: "my-app",
  templateUrl: "partials/app.html",
  directives: [BookWelcomeComponent, BookItemComponent, BookSpecialComponent],
  pipes: [SearchPipe],
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
        margin-top: 10px;
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

	// Constructor/Initialiser function to auto setup instance value of Component
  constructor(private bookItemService: BookItemService, private bookSpecialService: BookSpecialService) {}

  ngOnInit() {
    this.bookItems = this.bookItemService.get();
    this.bookSpecials = this.bookSpecialService.get();
  }

  // Iterate over these in app.html
  bookItems;
  bookSpecials;

} // end export
