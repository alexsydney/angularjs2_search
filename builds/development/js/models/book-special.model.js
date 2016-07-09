System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BookSpecialModel;
    return {
        setters:[],
        execute: function() {
            BookSpecialModel = (function () {
                function BookSpecialModel(name, bookNumber, shortname, addressLine1, addressLine2) {
                    this.name = name;
                    this.bookNumber = bookNumber;
                    this.shortname = shortname;
                    this.addressLine1 = addressLine1;
                    this.addressLine2 = addressLine2;
                }
                return BookSpecialModel;
            }());
            exports_1("BookSpecialModel", BookSpecialModel);
        }
    }
});

//# sourceMappingURL=book-special.model.js.map
