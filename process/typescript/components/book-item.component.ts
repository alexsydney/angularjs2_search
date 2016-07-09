import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Rating2Directive} from "../directives/rating2.directive";
import {Rating} from "./book-rating.component";

@Component({
  selector: "book-item",
  directives: [Rating2Directive, Rating],
  templateUrl: "partials/book-item.html",
  styles: [
  	// CSS Styles - Backtick usage
    `
      .delete {
        float: right;
        padding-right: 10px;
        padding-bottom: 10px;
      }
      .rating {
        margin-left: 10px;
        font-size: 2em;
        color: #dddddd;
      }
      .rating1 {
        color: red;
      }
      .rating2 {
        color: orange;
      }
      .rating3 {
        color: #ccaa33;
      }
      .rating4 {
        color: #dddd33;
      }
      .rating5 {
        color: green;
      }
      .rating-bar {
        margin-left: 15px;
        padding-left: 5px;
      }
    `
  ],
  // CSS Styles in External Stylesheet
  styleUrls: [
    "css/app.css"
  ]
  // ,
  // inputs: ["bookChildItem"]
})

export class BookItemComponent {

	// Pass dynamic value from Boot Item Component
	// to child Book Rating Component
  private rate: number;

	// Note: May use inputs: [".."] above instead
	// bookChildItem (binding target) in app.html

	// Alias of bookChildItemToWatch
  @Input("bookChildItemToWatch") bookChildItem;

	// Set property to event emitter object. Alias bookToDelete
  @Output("bookToDelete") delete = new EventEmitter();

  @Output("updateRate") rateChange = new EventEmitter();

  ngOnInit() {
		// Initialise the rating shown on page load to the preset data values
    this.rate = this.bookChildItem.rating;
  }

  onUpdateRating(value) {
    console.log("Updating Rating (via Book Item Component): " + value);
    this.rate = value;
    this.rateChange.next(value);
  }

  onDelete() {
    console.log("Deleting: " + JSON.stringify(this.bookChildItem));

		// Raise Output delete event
    this.delete.emit(this.bookChildItem);
  }

}
