import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserListInlineComponent } from './user-list-inline/user-list-inline.component';
import { UserListTemplateComponent } from './user-list-template/user-list-template.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserListComponent,
    UserListInlineComponent,
    UserListTemplateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = '17';
  data = 'Code Step by Step';
  getValue(name: string) {
    window.alert(name);
  }
}
