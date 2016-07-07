import {Component} from "angular2/core";

@Component({
  selector: "book-welcome",
  templateUrl: "partials/book-welcome.html",
  // CSS Styles in External Stylesheet
  styleUrls: [
    "css/app.css"
  ],
  inputs: ["bookChildWelcome"]
})

export class BookWelcomeComponent {}
