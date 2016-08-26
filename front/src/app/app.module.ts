import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShelfComponent } from './shelf/shelf.component';
import { ROUTES } from './app.routes';
import { BookListComponent } from './shelf/book-list/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShelfComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
