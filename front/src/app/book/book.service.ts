import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../';
import { Book } from './book.ts';

@Injectable()
export class BookService {

  ApiRoute: string;

  constructor(
    private http: Http
  ) {
    this.ApiRoute = `${environment.api.host}:${environment.api.port}`;
  }

  getBooksByGenre(genre: string) {
    return this.http.get(`http://${this.ApiRoute}/books/${genre}`);
  }

}
