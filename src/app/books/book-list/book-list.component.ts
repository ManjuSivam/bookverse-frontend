import { Component } from '@angular/core';
import { BookCardComponent } from '../book-card/book-card.component';
import { FiltersSidebarComponent } from '../filters-sidebar/filters-sidebar.component';
import { SortBarComponent } from '../sort-bar/sort-bar.component';
import { BookService } from '../../core/services/book.service';
import { Book } from '../../core/models/book.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-list',
  imports: [CommonModule, BookCardComponent, FiltersSidebarComponent, SortBarComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (response: Book[]) => {
        this.books = response;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }

  searchBooks(keyword: string) {
    if (keyword.trim() === '') {
      this.getAllBooks();
      return;
    }
    this.bookService.searchBooks(keyword).subscribe({
      next: (response: Book[]) => {
        this.books = response;
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
