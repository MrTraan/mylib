import { Component } from '@angular/core';
import { Http } from '@angular/http';

import { LoginComponent } from './login';
import { ShelfComponent } from './shelf';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
  	ShelfComponent
  ]
})
export class AppComponent {
}
