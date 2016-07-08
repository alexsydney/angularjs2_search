# Setup Instructions

- Download [NPM](https://nodejs.org/en/) then install Dependencies:
```npm cache clean```
```npm install```

- Build Project (Compiles Sass to CSS, compiles TypeScript to JavaScript). Runs Server in browser:
```
gulp
```

### Usage

- Create New Book Component. Click YES in the Welcome back! component view to open modal. Enter a unique Book Name & Author Name into the modal form and click Save Book to create a new book component on the page (validation checks prevent duplicates from being created). Close the modal by pressing the Close button (or click outside the modal). Scroll down the page to view the new book components that were created. 

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
