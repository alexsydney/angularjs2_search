import {Component, Input, Output, EventEmitter} from "angular2/core";

@Component({
  selector: "rating",

  // Refactored view into partial instead of embedding using backticks
  templateUrl: "partials/book-rating.html"
})

export class Rating {
  @Input() private rate: number;

	// Set property to event emitter object. Local Alias updateRate
  @Output("updateRate") rateChange = new EventEmitter();

  // Initialise star ratings range of values
  private range: Array<number> = [1, 2, 3, 4, 5];

  /**
   * Emit an event each time user clicks a star rating to update the
   * rate by pushing a new value
   */
  update(value) {
    console.log("Updated Rating (via Book Rating Component): " + value);
    this.rate = value;
    this.rateChange.next(value);
  }
}