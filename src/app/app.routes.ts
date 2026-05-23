import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { BookListComponent } from './books/book-list/book-list.component';


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },

    {
        path: 'books',
        component: BookListComponent
    }
];
