import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./components/app.component";
import {BookItemService} from "./services/book-item.service";
import {BookSpecialService} from "./services/book-special.service";

// enableProdMode();

/**
 * Register BookItemService and BookSpecialService in dependency graph so
 * available down the component hierarchy
 */
let appProviders = [BookItemService, BookSpecialService];

bootstrap(AppComponent, appProviders);
