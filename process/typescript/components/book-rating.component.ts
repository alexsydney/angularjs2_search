import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
  selector: "rating",
  template: `
    <span tabindex="0">
      <template ngFor let-item="$implicit" [ngForOf]="range" let-i="index">
        <span class="sr-only">({{ i < rate ? '*' : ' ' }})</span>
        <i class="glyphicon" (click)="update(i + 1)"
          [ngClass]="i < rate ? 'glyphicon-star' : 'glyphicon-star-empty'"></i>
      </template>
    </span>
  `
})

export class Rating {
  @Input() private rate: number;

	// Set property to event emitter object. Local Alias updateRate
  @Output("updateRate") rateChange = new EventEmitter();

  private range: Array<number> = [1, 2, 3, 4, 5];

  update(value) {
    console.log("Updated Rating (via Book Rating Component): " + value);
    this.rate = value;

		// Emit an event each time user clicks a star to
		// update the rate by pushing a new value
    this.rateChange.next(value);
  }
}