import {Component} from "angular2/core";

@Component({
  selector: "book-item",
  templateUrl: "partials/book-item.html",
  // CSS Styles in External Stylesheet
  styleUrls: [
    "css/app.css"
  ],
  inputs: ["bookChildItem"]
})

export class BookItemComponent {}
