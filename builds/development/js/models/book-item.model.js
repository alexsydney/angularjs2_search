System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BookItemModel;
    return {
        setters:[],
        execute: function() {
            BookItemModel = (function () {
                function BookItemModel(name, author, shortname, rating) {
                    this.name = name;
                    this.author = author;
                    this.shortname = shortname;
                    this.rating = rating;
                }
                return BookItemModel;
            }());
            exports_1("BookItemModel", BookItemModel);
        }
    }
});

//# sourceMappingURL=book-item.model.js.map
