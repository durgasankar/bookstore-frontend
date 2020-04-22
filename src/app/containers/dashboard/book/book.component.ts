import { AdminBook } from "./../../../models/admin-book";
import { Component, OnInit, Input } from "@angular/core";
import { AdminBookOperationService } from "src/app/services/admin-book-operation.service";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent implements OnInit {
  @Input() adminBook: AdminBook;
  constructor(private _adminBookOperationService: AdminBookOperationService) {}

  ngOnInit() {}

  removeBookFromList(bookId) {
    this._adminBookOperationService.removeBook(bookId).subscribe(
      (response: any) => {
        console.log("response: ", response);
      },
      (errors: any) => {
        console.log("errors : ", errors);
      }
    );
  }
}
