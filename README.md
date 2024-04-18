## ANGULAR

`npm i -g @angular/cli`

`ng version`

`ng new blog`

### Intro

File structure:

- src -> app -> component(reusable piece of code):
  - .component.css
  - .component.html
  - .component.ts -> for all the typescript logic
  - .component.spec.ts
  - .module.ts
- src -> assets -> images
- src -> environments -> .prod.ts, .ts -> to setup environment
- index.html -> first file that loads
- main.ts -> bootstraps angular to .html
- style.css -> global css
- angular.json -> configuration file for our angular project
- tsconfig.json -> global typescript configurations
- tsconfig.app.json -> application typescript configurations
- tsconfig.spec.json -> typescript configurations for spec file

### app.component.ts

```
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {             //these are the variables that one can access in the app.component.html
  title = '17';
}
```

app.component.html:

```
<h1>Hello Angular {{ title }}</h1>

```

### Interpolation

HTML page ke upar dynamic data ko display krne ke liye like the above example

data defined in the .component.ts is the dynamic data which can come from api, logic or any other place and to show it in .component.html is called interpolation

the dynamic data can also be a function as:

```
export class AppComponent {
  title = '17';
  data = 'Code Step by Step';
  getValue() {
    return 'This function gets data';
  }
}
```

```
<h2>{{ getValue() }}</h2>
```

It is kind of like running js in react component and similar to it, we cannot manipulate the data

### Angular CLI commands

- ng generate -> component, module, class
  - ng generate component login or
  - ng g c login

by default the component is created in /app

module is kind of a broader clubbing of related components

### Component

To render a component inside another component, find the selector of that component which is present in the .component.ts file when declaring the component, and use it as a html tag wherever you want to use it. Also, add it to the imports array of the component you are using it in.

### Inline style and inline template

`ng generate component user-list-inline --inline-style`

When there is minimal requirements for styling or most of the styling is from style.css (the global one)

generates the component without the .component.css file, and the classes of .component.html can be targeted in .component.ts file in styles

`ng generate component user-list-template --inline-template`

generates component without the .component.css file, the html can be targeted in .component.ts file in template

`ng g c user-list-inline-style-template --inline-style --inline-template`

combines the use case of both and does not create neither the css file nor the html file

### Module

A complete feature/functionality on it's own like : auth that contains login, signup or forgot password

A component can be reusable but not a module

it manages : components that need to be exported, modules that need to be imported, components that are declared under that module,

it also kind of works as lazy-loading

### Make and call function
