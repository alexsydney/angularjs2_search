import {Directive, HostBinding, HostListener, Input} from "angular2/core";

@Directive({
  selector: "[rating2]"
})

/**
 * Directive only currently used for hover effect
 */
// TODO - Fix hover colour to match star instead of always 4
export class Rating2Directive {
  @HostBinding("class.rating2") rating;
  @HostBinding("class.rating4") hovering = false;

  @HostListener("mouseenter")
  onMouseEnter() {
    this.hovering = true;
  }

  @HostListener("mouseleave")
  onMouseLeave() {
    this.hovering = false;
  }

  @Input()
  set rating2(value) {
    // this.rating = value;
  }
}
