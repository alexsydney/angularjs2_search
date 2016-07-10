System.register(["angular2/core", "../directives/rating2.directive", "./book-rating.component"], function(exports_1, context_1) {
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
    var core_1, rating2_directive_1, book_rating_component_1;
    var BookItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (rating2_directive_1_1) {
                rating2_directive_1 = rating2_directive_1_1;
            },
            function (book_rating_component_1_1) {
                book_rating_component_1 = book_rating_component_1_1;
            }],
        execute: function() {
            BookItemComponent = (function () {
                function BookItemComponent() {
                    // Set property to event emitter object. Alias bookToDelete
                    this.delete = new core_1.EventEmitter();
                    this.rateChange = new core_1.EventEmitter();
                }
                BookItemComponent.prototype.ngOnInit = function () {
                    // Initialise rating shown on page load to preset data values
                    this.rate = this.bookChildItem.rating;
                };
                BookItemComponent.prototype.onUpdateRating = function (value) {
                    console.log("Updating Rating (via Book Item Component): " + value);
                    this.rate = value;
                    this.rateChange.next(value);
                };
                BookItemComponent.prototype.onDelete = function () {
                    console.log("Deleting: " + JSON.stringify(this.bookChildItem));
                    // Raise Output delete event
                    this.delete.emit(this.bookChildItem);
                };
                __decorate([
                    core_1.Input("bookChildItemToWatch"), 
                    __metadata('design:type', Object)
                ], BookItemComponent.prototype, "bookChildItem", void 0);
                __decorate([
                    core_1.Output("bookToDelete"), 
                    __metadata('design:type', Object)
                ], BookItemComponent.prototype, "delete", void 0);
                __decorate([
                    core_1.Output("updateRate"), 
                    __metadata('design:type', Object)
                ], BookItemComponent.prototype, "rateChange", void 0);
                BookItemComponent = __decorate([
                    core_1.Component({
                        selector: "book-item",
                        directives: [rating2_directive_1.Rating2Directive, book_rating_component_1.Rating],
                        templateUrl: "partials/book-item.html",
                        // CSS Styles in External Stylesheet
                        styleUrls: [
                            "css/app.css"
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], BookItemComponent);
                return BookItemComponent;
            }());
            exports_1("BookItemComponent", BookItemComponent);
        }
    }
});

//# sourceMappingURL=book-item.component.js.map
