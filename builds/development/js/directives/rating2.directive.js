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
    var Rating2Directive;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Rating2Directive = (function () {
                function Rating2Directive() {
                    this.hovering = false;
                }
                Rating2Directive.prototype.onMouseEnter = function () {
                    this.hovering = true;
                };
                Rating2Directive.prototype.onMouseLeave = function () {
                    this.hovering = false;
                };
                Object.defineProperty(Rating2Directive.prototype, "rating2", {
                    set: function (value) {
                        // this.rating = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                __decorate([
                    core_1.HostBinding("class.rating2"), 
                    __metadata('design:type', Object)
                ], Rating2Directive.prototype, "rating", void 0);
                __decorate([
                    core_1.HostBinding("class.rating4"), 
                    __metadata('design:type', Object)
                ], Rating2Directive.prototype, "hovering", void 0);
                __decorate([
                    core_1.HostListener("mouseenter"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], Rating2Directive.prototype, "onMouseEnter", null);
                __decorate([
                    core_1.HostListener("mouseleave"), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', []), 
                    __metadata('design:returntype', void 0)
                ], Rating2Directive.prototype, "onMouseLeave", null);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object), 
                    __metadata('design:paramtypes', [Object])
                ], Rating2Directive.prototype, "rating2", null);
                Rating2Directive = __decorate([
                    core_1.Directive({
                        selector: "[rating2]"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Rating2Directive);
                return Rating2Directive;
            }());
            exports_1("Rating2Directive", Rating2Directive);
        }
    }
});

//# sourceMappingURL=rating2.directive.js.map
