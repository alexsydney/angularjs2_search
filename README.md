Setup
========

* Development

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

- Setup TSLint and Config File 
```npm install tslint typescript --save```

* Install Dependencies
```npm install```

* Build / Compile TS to JS. Run Server
```gulp```

TODO
========

- Commit changes made in ./process/typescript