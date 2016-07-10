import {Component, Input, Output, EventEmitter} from "angular2/core";
import {Rating2Directive} from "../directives/rating2.directive";
import {Rating} from "./book-rating.component";

@Component({
  selector: "book-item",
  directives: [Rating2Directive, Rating],
  templateUrl: "partials/book-item.html",

  // CSS Styles in External Stylesheet
  styleUrls: [
    "css/app.css"
  ]
})

export class BookItemComponent {

	/**
   * Pass dynamic value from Boot Item Component
   * to child Book Rating Component
   */
  private rate: number;

	// Alias bookChildItemToWatch for bookChildItem (binding target)
  @Input("bookChildItemToWatch") bookChildItem;

	// Set property to event emitter object. Alias bookToDelete
  @Output("bookToDelete") delete = new EventEmitter();

  @Output("updateRate") rateChange = new EventEmitter();

  ngOnInit() {
		// Initialise rating shown on page load to preset data values
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
