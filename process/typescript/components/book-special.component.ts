import {Component} from "@angular/core";

@Component({
  selector: "book-special",
  templateUrl: "partials/book-special.html",
  // CSS Styles in External Stylesheet
  styleUrls: [
    "css/app.css"
  ],
  inputs: ["bookChildSpecial"]
})

export class BookSpecialComponent {}
