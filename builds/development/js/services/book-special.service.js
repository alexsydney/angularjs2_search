System.register(["angular2/core", "../models/book-special.model"], function(exports_1, context_1) {
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
    var core_1, book_special_model_1;
    var BookSpecialService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (book_special_model_1_1) {
                book_special_model_1 = book_special_model_1_1;
            }],
        execute: function() {
            BookSpecialService = (function () {
                // Constructor/Initialiser function to auto setup instance value of Component
                function BookSpecialService() {
                    /**
                     * Array of type special book (in object format defined in interface)
                     * is fed with raw sample JSON data representations of the content.
                     */
                    // Use "name" data property to overlay the image instead of embedded image text
                    this.specialBooks = [
                        new book_special_model_1.BookSpecialModel("Top 10 Australian Beaches", "10", "images/top.jpg", "Whitehaven Beach", "Whitesunday Island, Whitsunday Islands")
                    ];
                }
                BookSpecialService.prototype.get = function () {
                    return this.specialBooks;
                };
                ;
                BookSpecialService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], BookSpecialService);
                return BookSpecialService;
            }());
            exports_1("BookSpecialService", BookSpecialService);
        }
    }
});

//# sourceMappingURL=book-special.service.js.map
