# Setup Instructions

- Download [NPM](https://nodejs.org/en/) then install Dependencies:
```npm cache clean```
```npm install```

- Build Project (Compiles Sass to CSS, compiles TypeScript to JavaScript). Runs Server in browser:
```
gulp
```

Note: Internet connection required to load fonts

### Usage

- Create New Book Component. Click YES in the Welcome back! component view to open modal. Enter a unique Book Name & Author Name into the modal form and click Save Book to create a new book component on the page (validation checks prevent duplicates from being created). Close the modal by pressing the Close button (or click outside the modal). Scroll down the page to view the new book components that were created.

- After creating new book components. Choose from the drop-down selection box to sort their display order based on either "NAME" or "AUTHOR"

- Click a Star Rating to change the pre-defined rating. New book components are given a zero (0) rating by default.

- Click the Red Cross to delete a book component.

- Install ChromeVox for text-to-speech screen reading. sr-only, aria-selected, aria-required, and aria-describedby classes for selection boxes and forms to W3C accessibility guidelines

- Experiment with Responsive Web Design. Resize the page. On smaller screen sizes a single column is presented with a hamburger menu icon. On larger screen sizes two columns are presented with the menu items automatically expanded.


# Other Notes

- Install TypeScript and Intellisense
```npm install -g typescript```

- Install TypeScript Build System as Sublime Text 3 Plugin
```cd "%APPDATA%\Sublime Text 3\Packages"  
git clone --depth 1 https://github.com/Microsoft/TypeScript-Sublime-Plugin.git TypeScript```

- Setup to Display Errors in Real-Time
```Ctrl+Shift+P -> Typescript: ShowErrorList```

- Setup DocBlockr (Code Comment Template Autocomplete)
```Ctrl+Shift+P -> DocBlockr```
```/**``` + ```Tab```
```/*``` + ```Tab```

- Build in Sublime Text 3 to Compile TS to JS
	- Tools > Build System > TypeScript
```CMD + B```


# TODO / Known Bugs

- Only one hover colour using rating directive. Modify to match rating.
- Mouseleave sometimes leaves the selected rating with gray colour instead of rating.
- Sorting by the selected kind only works manually each time selection box drop-down item is chosen. It does not occur automatically when create/delete a book component.
- Convert to [Angular Material 2](https://github.com/angular/material2/blob/master/GETTING_STARTED.md)