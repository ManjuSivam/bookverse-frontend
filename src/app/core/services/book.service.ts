import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  private apiUrl = environment.apiBaseUrl + "/api/books";

  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + "/" + id);
  }

  searchBooks(keyword: string): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + '/search?keyword=' + keyword);
  }

}
