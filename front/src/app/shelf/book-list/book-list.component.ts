import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { HTTP_PROVIDERS } from '@angular/http';

import { BookService, Book } from '../../book';

@Component({
  selector: 'app-book-list',
  templateUrl: 'book-list.component.html',
  styleUrls: ['book-list.component.css'],
  providers: [
    BookService,
    HTTP_PROVIDERS
  ]
})
export class BookListComponent implements OnInit {

  private books: Book[];
  private selectedGenre: string;

  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.selectedGenre = this.route.snapshot.params['genre'];

    this.bookService.getBooksByGenre(this.selectedGenre)
    .map(res => res.json())
    .subscribe(
      res => this.books = res,
      err => console.log(err)
    )
  }

}
