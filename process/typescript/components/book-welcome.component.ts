import {Component} from "angular2/core";
import {ControlGroup, Control, Validators} from "angular2/common";
import {BookItemService} from "../services/book-item.service";

@Component({
  selector: "book-welcome",
  templateUrl: "partials/book-welcome.html",

  // CSS Styles in External Stylesheet
  styleUrls: [
    "css/app.css"
  ],
  inputs: ["bookChildWelcome"]
})

export class BookWelcomeComponent {

  /** 
   * Default value false. If user tries to submit the form after
   * enter a Book Name or Book Author that already exists, this is
   * set to true, and the user is shown an error message
   */
  private duplicateExists = false;

  private successCreatingBook = false;

  /** 
   * Default value true. If user clicks "NO" on Welcome Template
   * hasNewBook is set to false and Welcome Template closes
   */
  private hasNewBook = true;

  /**
   * Store locally array of JSON book objects retrieved from
   * BookItemService
   */
  private bookItems;

  // Class Property for Form
  private form;

  constructor(private bookItemService: BookItemService) {}

  // Lifecycle Events
  ngOnInit() {
    this.bookItems = this.bookItemService.get();

    this.form = new ControlGroup({

      // Default Values are Empty Strings
      "name": new Control("", Validators.compose([
        Validators.required,

        // Validate input field using RegEx to contain alphanumeric
        Validators.pattern("[\\w\\-\\s\\/]+")
      ])),
      "author": new Control("", Validators.compose([
        Validators.required,
        Validators.pattern("[\\w\\-\\s\\/]+")
      ])),

      // Default value of 0
      "rating": new Control("0")
    });
  }

  // Close the Welcome Component
  onClose() {
    this.hasNewBook = false;
  }

  // Custom Validator to Check Duplicate Book Not Exist
  duplicateValidator(submitBookItem) {

    for (let book = 0; book < this.bookItems.length; book++) {
      for (let key in this.bookItems[book]) {
        if (this.bookItems.hasOwnProperty(book)) {
          if (this.bookItems[book][key] === submitBookItem["name"].trim() ||
            this.bookItems[book][key] === submitBookItem["author"].trim()) {

            // Set local property to indicate that duplicate book item exists
            this.duplicateExists = true;

            console.log("Duplicate Detected: " + this.bookItems[book][key]);
          } else {
            // console.log("Non-duplicate: " + this.bookItems[book][key]);
          }
        }
      }
    }
  }

  // Form submission method
  onSubmit(submitBookItem) {

    // Reset value of duplicateExists to allow next submission
    this.duplicateExists = false;

    // Reset value of successCreatingBook
    this.successCreatingBook = false;

    // Do not add duplicate book items
    this.duplicateValidator(submitBookItem);

    if (this.duplicateExists === false) {

      // Call Service method to add new book item form fields to JSON data model
      this.bookItemService.add(submitBookItem);

      // Show success message to user
      this.successCreatingBook = true;

      console.log("Added Book Item: " + JSON.stringify(submitBookItem) );
      console.log("Updated Book Items List: " + JSON.stringify(this.bookItemService.get()) );
    }
  }
}
