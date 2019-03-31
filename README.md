<img src="https://webfruits.io/assets/wf-small-bestpractice-logo.svg" alt="wf core logo" height="50px">

# webfruits/bestpractice &nbsp; [![Language TypeScript](https://img.shields.io/badge/language-TypeScript-green.svg)](https://www.typescriptlang.org) [![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE) ![GitHub package.json version](https://img.shields.io/github/package-json/v/webfruits/best-practice.svg?color=green&label=master&logo=github) 
This document provides some basic recommendations about how to structure and implement a webapp with [webfruits](https://github.com/webfruits).  

## Code is just a tool – not the objective 
[Write self explaining and readable code](https://medium.com/@webseanhickey/the-evolution-of-a-software-engineer-db854689243). Always try to find a solution that even a beginner can understand (and yourself one month later). If you do so you can avoid comments, which takes time to write and a lot of attention to keep in sync with your code. Use your time to create awesome user interfaces and not to write complex code. In other words: Be dedicated to your solution and after that cames your code!

_BTW: To keep things simple and understandable in its codebase is one of the main reasons for developing webfruits. Mostly every major UI library or framework is huge in its codebase and not that easy to master with all its extensions, plugins and dependecies. Try to ask yourself if you or your team really need that kind of big „middleware“ between you and the DOM. Keep in mind, that the DOM itself is already a high level UI-API._

## Use TypeScript
[TypeScript](https://basarat.gitbooks.io/typescript/docs/why-typescript.html) will help you a lot and finally increase your productivity and code quality. With TypeScript you can easily navigate through your whole codebase and it prevents you making mistakes during writing code. It forces you to write better code. Feel interested to read this inofficial [TypeScript StyleGuide and Coding Conventions](https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md#variable-and-function).

## Use Classes
- **Write one class per file only.** With TypeScript it is getting really easy to write classes and to extend classes. 

- **Structure you implementation.** You'll find a [skeleton class](./skeleton-class/SkeletonClass.ts) in this repository, which provides comment blocks for `Properties`, `Constructor`, `Public Methodes`, `Private Methodes` and `Events`. If you like, use this `SkeletonClass.ts` to structure you implementation for a class. 

- **Keep any property or methode `private`** unless you need it `public` which then becomes a class API.

- **Prefix `private properties` with an underscore.** Do not change properties directly. Use getters and setters instead. Using getters and setters allowes you to react when a property has changed.

## Use this main file-structure
Every project has its unique requirements. So every projects is getting its unique file structure over time. It's a process that envolves over time. Do not [overthink your file structure](https://reactjs.org/docs/faq-structure.html) at the beginning. 

The following file structure shows how a webfruits webapp could be organized:
```
dist/
src/
    assets/
    html/
    libs/
    scss/
    ts/
```
- Use `dist/` and `src/` for your distribution and source folder. It has became the almost standard.
- **`src/`** The first level in `src/` should give you a quick overview of what the app is build of. If you app only needs `assets/` and `ts/` than create only this folders.
  - `assets/` contains any kind of assets like `images/`, `icons/`, `fonts/`, ...
  - `html/` html, pub, hbs or any other markup template. If you use hbs use `hbs/`instead
  - `libs/` some external non-npm-libraries
  - `scss/` css, scss, less or any other styling definitions. If you use less use `less/` instead
  - `ts` this shows you that, the app is build with TypeScript
  - ... create further folder if your app depends on it

## Use this TypeScript file structure
The file structure for your codebase follows the same paradigm like the main file structure. It shows in a quick way what you app is made of, without even read any kind of code.  

### TypeScript files: `ts/`
```
ts/
    app-name/
    index.ts        
```
- **`index.ts`** This is your entry point, which is requested by your bundler like webpack. For example it contains the initialisiation of the `AppNameMain.ts`.
- **`app-name/`** name this folder as your app is named. It contains the whole app logic.  
Why using a app-folder? Because sometimes your project contains multiple apps. A common case is to have a `app-loader/` and a `app-main/`. In this case you have two index files like `index-loader.ts` and `index-main.ts`.

### App: `ts/app-name/`
```
app-name/
    config/
    core/
    components/
    style/
    AppNameMain.ts
```
- **`config/`** any global configuration should be place within this folder. Mostly it contains just a `AppConfig.ts`, which may defines a namespace, the AppBasePath, external API-Urls, global Animation settings or anything else which should be easily accessible.
- **`core/`** this folders contains every core module that is powering your app. You quickly see if it uses a store, uses routing or depends on a service.
- **`components/`** every ui component will find its place in this folder. 
- **`style/`** location for all global style definitions
- **`AppNameMain.ts`** this is the place to initialize all core modules.
- most likly there will be more folders depending on your app.

### Core: `ts/app-name/core/`
```
core/
    CoreView.ts
    CoreController.ts
    CoreData.ts
    CoreService.ts
    CoreStore.ts
    CoreSound.ts
    CoreRouter.ts
    ...
```
- `CoreView.ts` one of the most important classes of you webapp. It initializes your main components.
- `CoreController.ts` takes it all. It knows of all core modules which are relevant to communicate with each other. Basically this controlls your app.
- see [skeleton-app](./skeleton-app) for further information of how a implementation of these classes can be done

### Components: `ts/app-name/components/`
```
components/
    typography/
        headline/
            Headline.ts
        abstract/    
            Abstract.ts
        paragraph/
            Paragraph.ts
    content/        
        teaser/
            TeaserModel.ts
            Teaser.ts
        ...    
    interface/
        button/
            Button.ts
        dropdown/
            Dropdown.ts
        ...   
    ...    
```
This is just an example of how to structure you components. There is only one recommendations:
- **Use a folder for every component**. Even when a component itself is made only from one file. If you need additional classes or subcomponents that a specific to one component, put it in the same folder.


### Styles: `ts/app-name/style/`
```
style/
    FontStyle.ts
    SizeStyle.ts
    Color.ts
    ...
```
All global styles should be implemented in specific classes with static getters or properties. The advantage of using  getters is, that the values can be calculated dynamically. For example the value for a headlines fontsize depends from the current width of the app.  
Because in [webfruits/core](https://github.com/webfruits/core) styles are defined via TypeScript, this styles can be used across your whole codebase.

### The whole file structure at once
```
ts/
    [app-name]/
        config/
            AppConfig.ts
        core/
            CoreView.ts
            CoreController.ts
            CoreData.ts
            CoreService.ts
            CoreStore.ts
            CoreSound.ts
            CoreRouter.ts
            ...
        style/
            FontStyle.ts
            SizeStyle.ts
            Color.ts
            ...
        components/
            typography/
                headline/
                    Headline.ts
                abstract/    
                    Abstract.ts
                paragraph/
                    Paragraph.ts
            content/        
                teaser/
                    TeaserModel.ts
                    Teaser.ts
                ...    
            interface/
                button/
                    Button.ts
                dropdown/
                    Dropdown.ts
                ...   
            ...    
        AppNameMain.ts
    index.ts        
```

### Example: SkeletonApp
The [skeleton-app](./skeleton-app) demonstrates, how the structure could look like on a webapp that uses a service to catch the data for a gallery, which can be controlled by a navigation. It features only this kind of implementation that is needed to get the idea.

## more webfruits

- **[webfruits/core](https://github.com/webfruits/core)**  
a TypeScript library for building user interfaces using the real DOM.

- **[webfruits/toolbox](https://github.com/webfruits/toolbox)**  
provides additional features like SVGComponent, GridLayout and a lot of utilities.

- **[webfruits/webpack-starterkit](https://github.com/webfruits/webpack-starterkit)**  
is a basic webpack setup and skeleton for an webfruits application.


## Licence
webfruits/best-pratice is [MIT licensed](./LICENSE).
