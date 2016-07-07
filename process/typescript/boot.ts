import {bootstrap} from "angular2/platform/browser";
import {AppComponent} from "./app.component";
import {BookItemService} from "./book-item.service";

// enableProdMode();

// Register BookItemService in dependency graph so
// available down the component hierarchy
bootstrap(AppComponent, [ BookItemService ]);
