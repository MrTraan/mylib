import { Routes } from '@angular/router';

import { ShelfComponent } from './shelf';
import { LoginComponent } from './login';
import { BookListComponent } from './shelf/book-list';

export const ROUTES: Routes = [
 { path: '', component: ShelfComponent },
 { path: 'login', component: LoginComponent },
 { path: 'book-list/:genre', component: BookListComponent }
];