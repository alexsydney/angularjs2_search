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
            // Best practice
            BookItemService = (function () {
                function BookItemService() {
                    this.books = [
                        new book_item_model_1.BookItemModel("El Pooch", "Alex Nelson", "images/elpooch.jpg"),
                        new book_item_model_1.BookItemModel("The Flight", "Scott Masterson", "images/theflight.jpg")
                    ]; // Array of Book Type
                }
                BookItemService.prototype.get = function () {
                    return this.books;
                };
                BookItemService.prototype.add = function (newBook) {
                    console.log("Added Book: " + newBook);
                    this.books.push(newBook);
                    // TODO - Added books are automatically sorted
                    // this.books = [...this.books, newBook];
                };
                ;
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
