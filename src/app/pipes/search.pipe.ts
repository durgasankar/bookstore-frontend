import { Pipe, PipeTransform } from "@angular/core";
import { UserBook } from "../models/user-books";
import { AdminBook } from "../models/admin-book";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(books: AdminBook[], searchTerm: string): AdminBook[] {
    console.log(searchTerm);
    if (!books || !searchTerm) {
      return books;
    }
    return books.filter(
      (book: AdminBook) =>
        book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1
    );
  }
}
