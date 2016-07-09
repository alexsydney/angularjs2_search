System.register(["@angular/core", "./book-welcome.component", "./book-item.component", "./book-special.component", "../services/book-item.service", "../services/book-special.service", "../pipes/search.pipe", "../pipes/keys.pipe", "../pipes/array-of-book-items.pipe"], function(exports_1, context_1) {
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
    var core_1, core_2, book_welcome_component_1, book_item_component_1, book_special_component_1, book_item_service_1, book_special_service_1, search_pipe_1, keys_pipe_1, array_of_book_items_pipe_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (book_welcome_component_1_1) {
                book_welcome_component_1 = book_welcome_component_1_1;
            },
            function (book_item_component_1_1) {
                book_item_component_1 = book_item_component_1_1;
            },
            function (book_special_component_1_1) {
                book_special_component_1 = book_special_component_1_1;
            },
            function (book_item_service_1_1) {
                book_item_service_1 = book_item_service_1_1;
            },
            function (book_special_service_1_1) {
                book_special_service_1 = book_special_service_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            },
            function (keys_pipe_1_1) {
                keys_pipe_1 = keys_pipe_1_1;
            },
            function (array_of_book_items_pipe_1_1) {
                array_of_book_items_pipe_1 = array_of_book_items_pipe_1_1;
            }],
        execute: function() {
            // TypeScript compiles to JavaScript and creates the templates
            // which provide the markup and populate the content on the page
            AppComponent = (function () {
                // Constructor/Initialiser function to auto setup instance value of Component
                function AppComponent(bookItemService, bookSpecialService) {
                    this.bookItemService = bookItemService;
                    this.bookSpecialService = bookSpecialService;
                    // Declare with default value
                    this.selectedBookSort = "NAME";
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.bookItems = this.bookItemService.get();
                    this.bookSpecials = this.bookSpecialService.get();
                };
                AppComponent.prototype.onUpdateRating = function (value, bookItem) {
                    console.log("Receiving Emitted Event to Update Rating: " + value + ".. for Book Item: " + bookItem);
                    this.bookItemService.updateRating(value, bookItem);
                };
                AppComponent.prototype.onBookItemDeleted = function (bookItem) {
                    console.log("Receiving Emitted Event to Delete: " + bookItem);
                    this.bookItemService.remove(bookItem);
                };
                // Triggered when user changes drop-down to sort book items by "name" or "author"
                AppComponent.prototype.onBookSortChange = function (newValue) {
                    this.selectedBookSort = newValue;
                    // console.log(newValue);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        // All styles in no styles out (default)
                        encapsulation: core_2.ViewEncapsulation.Emulated,
                        selector: "my-app",
                        templateUrl: "partials/app.html",
                        directives: [book_welcome_component_1.BookWelcomeComponent, book_item_component_1.BookItemComponent, book_special_component_1.BookSpecialComponent],
                        pipes: [search_pipe_1.SearchPipe, keys_pipe_1.KeysPipe, array_of_book_items_pipe_1.ArrayOfBookItemsPipe],
                        // CSS Styles
                        styles: [
                            // CSS Styles - Backtick usage
                            "\n      .contentWrapper {\n        background-color: #dddddd;\n        padding: 5px;\n      }\n\n      .navbar-menu-list h6 {\n        font-family: 'Roboto', sans-serif;\n        font-weight: bold;\n      }\n\n      .form-control {\n        width: 100px;\n        margin-top: 5px;\n        margin-bottom: 5px;\n        margin-right: 5px;\n        clear: none;\n      }\n    "
                        ],
                        // CSS Styles in External Stylesheet
                        styleUrls: [
                            "css/app.css"
                        ]
                    }), 
                    __metadata('design:paramtypes', [book_item_service_1.BookItemService, book_special_service_1.BookSpecialService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent); // end export
        }
    }
});

//# sourceMappingURL=app.component.js.map
