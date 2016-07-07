import {Component} from "angular2/core";
import {BookWelcomeComponent} from "./book-welcome.component";
import {BookItemComponent} from "./book-item.component";
import {BookItemService} from "./book-item.service";
// import {SearchPipe} from "./search.pipe";

// TypeScript compiles to JavaScript and creates the templates
// which provide the markup and populate the content on the page
@Component({
  selector: "my-app",
  templateUrl: "partials/app.html",
  directives: [BookWelcomeComponent, BookItemComponent],
  // pipes: [SearchPipe],
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
    `
  ],

  // CSS Styles in External Stylesheet
  styleUrls: [
    "css/app.css"
  ]

})

export class AppComponent {

	// Constructor/Initialiser function to auto setup instance value of Component
  constructor(private bookItemService: BookItemService) {}

  ngOnInit() {
    this.bookItems = this.bookItemService.get();
  }

  bookItems;

} // end export
