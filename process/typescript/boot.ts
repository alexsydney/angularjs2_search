import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import {BookItemService} from "./book-item.service";
import {BookSpecialService} from "./book-special.service";

// enableProdMode();

// Register BookItemService and BookSpecialService in dependency graph so
// available down the component hierarchy
let appProviders = [BookItemService, BookSpecialService];

bootstrap(AppComponent, appProviders);
