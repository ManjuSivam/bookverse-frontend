import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sort-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './sort-bar.component.html',
  styleUrl: './sort-bar.component.css'
})
export class SortBarComponent {
  keyword: string = '';

  @Output()
  search = new EventEmitter<string>();

  @Input()
  totalBooks: number = 0;

  onSearch(): void {
    this.search.emit(this.keyword);
  }



}
