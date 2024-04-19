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

```
export class AppComponent {
  title = '17';
  data = 'Code Step by Step';
  getValue(name: string) {
    window.alert(name);
  }
}

```

Calling a function on button click:

```
<button (click)="getValue('Code step by step')">Click Me</button>
```

### Events (blur, keyup, keydown, mouseover, mouseleave)

<input
type="text"
#box
(keyup)="getValue(box.value)"
placeholder="event keyup"
/>

The #box is the id whose value can be accessed throughout the html

#### Getting text box value and printing it

```
<input type="text" #name placeholder="Enter name" name="userName" />

<button (click)="getValue(name.value)">Click</button>

<p>Input value: {{ displayName }}</p>
<p>Placeholder: {{ name.placeholder }}</p>
<p>Name: {{ name.name }}</p>
```

```
export class AppComponent {
  title: string = 'Get Input Box Value';
  displayName: string = '';
  getValue(name: string) {
    this.displayName = name;
  }
}
```

#### Counter Button example

```
<h2>{{ title }}</h2>

<p>Counter Value: {{ count }}</p>

<button (click)="increment()">Increment</button>
<button (click)="decrement()">Decrement</button>
<button (click)="reset()">Reset</button>
```

```
export class AppComponent {
  title: string = 'Counter';
  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  reset() {
    this.count = 0;
  }
}
```

### Stying

#### Internal Styling

```
<style>
  .green {
    color: magenta;
  }
</style>

<button (click)="increment()" class="green">Increment</button>
```

The global styling has lesser priority as the dedicated .component.css file which has lesser priority as internal styling

### Property Binding

For changing property or attribute we use property binding

boolean values are not assignable through interpolation

```
<input
  type="text"
  name="user-name"
  disabled="{{ disabled }}"
  value="{{ name }}"
/>
<input type="text" name="user-name" [disabled]="disabled" [value]="name" />
```

```
export class AppComponent {
  name: string = 'Random';
  disabled: boolean = false;
}
```

interpolation converts value to string or numeric values, hence disabled is converted to string which results in true

### If-Else Condition

> To use it, we need to import commonModule first

```
<h1 *ngIf="showName">{{ show }}</h1>
<h1 *ngIf="!showName">{{ dont }}</h1>

<button (click)="toggleShow()">Toggle</button>
```

```
...
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ...,
    UserListTemplateComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  show: string = 'Now you see me';
  dont: string = "Now you don't";
  showName: boolean = true;
  toggleShow() {
    this.showName = !this.showName;
  }
}
```

OR

```
<h1 *ngIf="show; then ifblock else elseblock"></h1>
<ng-template #ifblock>
  <h1>Now you see me</h1>
</ng-template>
<ng-template #elseblock>
  <h1>Now you don't</h1>
</ng-template>
```

### Else-If Condition

```
<ng-template [ngIf]="showName"></ng-template>
```

### Switch Case

```
<div [ngSwitch]="color">
  <h1 style="color: red" *ngSwitchCase="'red'">Red Color</h1>
  <h1 style="color: green" *ngSwitchCase="'green'">Green Color</h1>
  <h1 style="color: blue" *ngSwitchCase="'blue'">Blue Color</h1>
  <h1 *ngSwitchDefault>Unknown Color</h1>
</div>
```

### Loop - \*ngFor

```
<h1>{{ title }}</h1>

<h3 *ngFor="let item of users">UserName: {{ item }}</h3>
```

```
export class AppComponent {
  title: string = 'For loop';
  users: string[] = ['Alpha', 'Beta', 'Gamma', 'Zeta'];
}
```

> for styling, a div that has inline style property, for [style.color]="green", green is like a variable that is passed down from .component.ts, to apply inline css, we also use single quotes along with double quotes as [style.color] = "'green'"
