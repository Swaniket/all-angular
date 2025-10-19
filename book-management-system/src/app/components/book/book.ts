import { Component, OnInit } from '@angular/core';
import { IBook } from '../../interface/book';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.html',
  styleUrl: './book.css',
})
export class Book implements OnInit {
  addedBooks: IBook[] = [];

  bookTitleInput: string = '';
  bookAuthorInput: string = '';

  ngOnInit() {
    const booksFromLocal = localStorage.getItem('addedBooks');

    if (booksFromLocal) {
      this.addedBooks = JSON.parse(booksFromLocal);
    }
  }

  handleAddBook() {
    if (this.bookTitleInput.length === 0 || this.bookAuthorInput.length === 0) {
      alert('Both of them are required');
      return;
    }

    const newBookObj: IBook = {
      id: Math.random() * 1000,
      title: this.bookTitleInput,
      author: this.bookAuthorInput,
    };

    this.addedBooks.push(newBookObj);
    localStorage.setItem('addedBooks', JSON.stringify(this.addedBooks));

    this.bookTitleInput = '';
    this.bookAuthorInput = '';
  }

  handleDeleteBook(index: number) {
    this.addedBooks.splice(index, 1);
    localStorage.setItem('addedBooks', JSON.stringify(this.addedBooks));
  }
}
