System.register(["angular2/core", "../models/book-item.model"], function(exports_1, context_1) {
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
    var core_1, book_item_model_1;
    var BookItemService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (book_item_model_1_1) {
                book_item_model_1 = book_item_model_1_1;
            }],
        execute: function() {
            // Service to abstract common methods. Best practice use of @Injectable
            BookItemService = (function () {
                function BookItemService() {
                    // Create instances of book item data model in accordance with defined interface type
                    this.books = [
                        new book_item_model_1.BookItemModel("El Pooch", "Alex Nelson", "images/elpooch.jpg", 1),
                        new book_item_model_1.BookItemModel("The Flight", "Scott Masterson", "images/theflight.jpg", 2)
                    ]; // Array of Book Type
                }
                BookItemService.prototype.get = function () {
                    return this.books;
                };
                BookItemService.prototype.add = function (newBook) {
                    console.log("Added Book: " + newBook);
                    this.books.push(newBook);
                    // TODO - Automatically sort the books when added
                    // this.books = [...this.books, newBook];
                };
                ;
                // Update star rating of book item
                BookItemService.prototype.updateRating = function (newRating, existingBook) {
                    console.log("Added Updated Rating: " + newRating);
                    // Obtain the array index of the book item for which we want to update its star rating
                    var i = this.books.indexOf(existingBook);
                    // Assign new rating as value of rating property for index
                    this.books[i].rating = newRating;
                    // console.log("Updated Books: " + JSON.stringify(this.books));
                };
                ;
                /**
                 * Move array item from old index position to the
                 * right-most position in given array
                 */
                BookItemService.prototype.move = function (array, oldIndex, newIndex) {
                    if (newIndex >= array.length) {
                        newIndex = array.length - 1;
                    }
                    array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
                    return array;
                };
                /**
                 * Remove an item from the array by moving it to the
                 * end of the array and then popping it. This avoids
                 * leaving null elements in the array when using splice.
                 */
                BookItemService.prototype.remove = function (bookToRemove) {
                    console.log("Removing Book: " + bookToRemove);
                    var i = this.books.indexOf(bookToRemove);
                    this.move(this.books, i, this.books.length - 1);
                    // console.log(JSON.stringify(this.books));
                    this.books.pop();
                    // this.books = [
                    //   ...this.books.slice(0, i),
                    //   bookToRemove,
                    //   ...this.books.slice(i + 1)
                    // ];
                };
                BookItemService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BookItemService);
                return BookItemService;
            }());
            exports_1("BookItemService", BookItemService);
        }
    }
});

//# sourceMappingURL=book-item.service.js.map
