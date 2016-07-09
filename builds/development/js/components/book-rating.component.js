System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var Rating;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Rating = (function () {
                function Rating() {
                    // Set property to event emitter object. Local Alias updateRate
                    this.rateChange = new core_1.EventEmitter();
                    this.range = [1, 2, 3, 4, 5];
                }
                Rating.prototype.update = function (value) {
                    console.log("Updated Rating (via Book Rating Component): " + value);
                    this.rate = value;
                    // Emit an event each time user clicks a star to
                    // update the rate by pushing a new value
                    this.rateChange.next(value);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Number)
                ], Rating.prototype, "rate", void 0);
                __decorate([
                    core_1.Output("updateRate"), 
                    __metadata('design:type', Object)
                ], Rating.prototype, "rateChange", void 0);
                Rating = __decorate([
                    core_1.Component({
                        selector: "rating",
                        template: "\n    <span tabindex=\"0\">\n      <template ngFor let-item=\"$implicit\" [ngForOf]=\"range\" let-i=\"index\">\n        <span class=\"sr-only\">({{ i < rate ? '*' : ' ' }})</span>\n        <i class=\"glyphicon\" (click)=\"update(i + 1)\"\n          [ngClass]=\"i < rate ? 'glyphicon-star' : 'glyphicon-star-empty'\"></i>\n      </template>\n    </span>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Rating);
                return Rating;
            }());
            exports_1("Rating", Rating);
        }
    }
});

//# sourceMappingURL=book-rating.component.js.map
