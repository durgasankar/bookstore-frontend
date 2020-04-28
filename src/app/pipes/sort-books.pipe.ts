import { Pipe, PipeTransform } from "@angular/core";
import { AdminBook } from "../models/admin-book";

@Pipe({
  name: "sortBooks",
})
export class SortBooksPipe implements PipeTransform {
  transform(books: AdminBook[], sortBy: string): any {
    console.log("sort by : ", sortBy);
    switch (sortBy) {
      case "none": {
        return books;
        break;
      }
      case "lowToHigh": {
        return (books = books.sort(
          (firstBook, secondBook) => firstBook.price - secondBook.price
        ));
        break;
      }
      case "highToLow": {
        return (books = books.sort(
          (firstBook, secondBook) => secondBook.price - firstBook.price
        ));
        break;
      }
      case "newestArrival": {
        return books.sort(function (book1, book2) {
          if (
            book1.additionDateTime.localeCompare(book2.additionDateTime) < 0
          ) {
            return 1;
          } else {
            return -1;
          }
        });
        break;
      }
    }
    return null;
  }
}
