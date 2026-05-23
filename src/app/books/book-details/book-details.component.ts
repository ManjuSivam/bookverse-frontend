import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../core/models/book.model';
import { BookService } from '../../core/services/book.service';

@Component({
  selector: 'app-book-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book!: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.loadBook(id);
    });

  }

  loadBook(id: number): void {
    this.bookService.getBookById(id)
      .subscribe({
        next: (response: Book) => {
          this.book = response;
        },
        error: (err: any) => {
          console.error(err);
        }
      });

  }

}