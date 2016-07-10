System.register(["angular2/core", "angular2/common", "../services/book-item.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, book_item_service_1;
    var BookWelcomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (book_item_service_1_1) {
                book_item_service_1 = book_item_service_1_1;
            }],
        execute: function() {
            BookWelcomeComponent = (function () {
                function BookWelcomeComponent(bookItemService) {
                    this.bookItemService = bookItemService;
                    /**
                     * Default value false. If user tries to submit the form after
                     * enter a Book Name or Book Author that already exists, this is
                     * set to true, and the user is shown an error message
                     */
                    this.duplicateExists = false;
                    this.successCreatingBook = false;
                    /**
                     * Default value true. If user clicks "NO" on Welcome Template
                     * hasNewBook is set to false and Welcome Template closes
                     */
                    this.hasNewBook = true;
                }
                // Lifecycle Events
                BookWelcomeComponent.prototype.ngOnInit = function () {
                    this.bookItems = this.bookItemService.get();
                    this.form = new common_1.ControlGroup({
                        // Default Values are Empty Strings
                        "name": new common_1.Control("", common_1.Validators.compose([
                            common_1.Validators.required,
                            // Validate input field using RegEx to contain alphanumeric
                            common_1.Validators.pattern("[\\w\\-\\s\\/]+")
                        ])),
                        "author": new common_1.Control("", common_1.Validators.compose([
                            common_1.Validators.required,
                            common_1.Validators.pattern("[\\w\\-\\s\\/]+")
                        ])),
                        // Default value of 0
                        "rating": new common_1.Control("0")
                    });
                };
                // Close the Welcome Component
                BookWelcomeComponent.prototype.onClose = function () {
                    this.hasNewBook = false;
                };
                // Custom Validator to Check Duplicate Book Not Exist
                BookWelcomeComponent.prototype.duplicateValidator = function (submitBookItem) {
                    for (var book = 0; book < this.bookItems.length; book++) {
                        for (var key in this.bookItems[book]) {
                            if (this.bookItems.hasOwnProperty(book)) {
                                if (this.bookItems[book][key] === submitBookItem["name"].trim() ||
                                    this.bookItems[book][key] === submitBookItem["author"].trim()) {
                                    // Set local property to indicate that duplicate book item exists
                                    this.duplicateExists = true;
                                    console.log("Duplicate Detected: " + this.bookItems[book][key]);
                                }
                                else {
                                }
                            }
                        }
                    }
                };
                // Form submission method
                BookWelcomeComponent.prototype.onSubmit = function (submitBookItem) {
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
                        console.log("Added Book Item: " + JSON.stringify(submitBookItem));
                        console.log("Updated Book Items List: " + JSON.stringify(this.bookItemService.get()));
                    }
                };
                BookWelcomeComponent = __decorate([
                    core_1.Component({
                        selector: "book-welcome",
                        templateUrl: "partials/book-welcome.html",
                        // CSS Styles in External Stylesheet
                        styleUrls: [
                            "css/app.css"
                        ],
                        inputs: ["bookChildWelcome"]
                    }), 
                    __metadata('design:paramtypes', [book_item_service_1.BookItemService])
                ], BookWelcomeComponent);
                return BookWelcomeComponent;
            }());
            exports_1("BookWelcomeComponent", BookWelcomeComponent);
        }
    }
});

//# sourceMappingURL=book-welcome.component.js.map
