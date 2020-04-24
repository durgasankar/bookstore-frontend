import { UserBook } from "./../../../models/user-books";
import { UserBookService } from "./../../../services/user-book.service";
import { AdminBook } from "./../../../models/admin-book";
import { Component, OnInit, Input } from "@angular/core";
import { AdminBookOperationService } from "src/app/services/admin-book-operation.service";
import { MatSnackBar } from "@angular/material";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent implements OnInit {
  @Input() adminBook: AdminBook;
  @Input() isAdmin: boolean;
  userBooks: UserBook;
  // isAddedToBag: boolean = false;
  // isAddedToWatchList: boolean = false;

  constructor(
    private _adminBookOperationService: AdminBookOperationService,
    private _userBookService: UserBookService,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit() {}

  getAllBooksForUser() {
    this._userBookService.getAllUserBooks().subscribe(
      (response: any) => {
        console.log("response : ", response);
        this.userBooks = response.list;
        console.log("user book list after transfer : ", this.userBooks);
      },
      (errors: any) => {
        console.log("errors : ", errors);
      }
    );
  }

  removeBookFromList(bookId) {
    this._adminBookOperationService.removeBook(bookId).subscribe(
      (response: any) => {
        console.log("response: ", response);
        this._matSnackBar.open(response.message, "ok", { duration: 4000 });
      },
      (errors: any) => {
        console.log("errors : ", errors);
        if (errors.error.httpStatus.match("NON_AUTHORITATIVE_INFORMATION")) {
          this._matSnackBar.open(errors.error.message, "Oops!", {
            duration: 4000,
          });
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
          localStorage.clear();
        } else {
          this._matSnackBar.open(errors.error.message, "ok", {
            duration: 4000,
          });
        }
      }
    );
  }
  addToCart(bookId: number) {
    console.log("note id : ", bookId);
    // console.log(" value : ", this.isAddedToBag);
    this._userBookService.addRemoveFromCart(bookId).subscribe(
      (response: any) => {
        console.log("response : ", response);
        if (response.statusCode === 200) {
          this.adminBook.isAddedToBag = true;
        } else {
          this.adminBook.isAddedToBag = false;
        }
        this._matSnackBar.open(
          this.adminBook.title + " " + response.message,
          "ok",
          { duration: 3000 }
        );
      },
      (errors: any) => {
        console.log("errors : ", errors);
        console.log("errors : ", errors);
        if (errors.error.httpStatus.match("NON_AUTHORITATIVE_INFORMATION")) {
          this._matSnackBar.open(errors.error.message, "Oops!", {
            duration: 4000,
          });
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
          localStorage.clear();
        } else {
          this._matSnackBar.open(errors.error.message, "ok", {
            duration: 4000,
          });
        }
      }
    );
  }

  addToWatchList(bookId: number) {
    console.log("note id : ", bookId);
    this._userBookService.addRemoveFromWatchlist(bookId).subscribe(
      (response: any) => {
        console.log("response : ", response);
        if (response.statusCode === 200) {
          this.adminBook.isAddedToWatchList = true;
        } else {
          this.adminBook.isAddedToWatchList = false;
        }
        this._matSnackBar.open(
          this.adminBook.title + " " + response.message,
          "ok",
          { duration: 3000 }
        );
      },
      (errors: any) => {
        console.log("errors : ", errors);
        console.log("errors : ", errors);
        if (errors.error.httpStatus.match("NON_AUTHORITATIVE_INFORMATION")) {
          this._matSnackBar.open(errors.error.message, "Oops!", {
            duration: 4000,
          });
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
          localStorage.clear();
        } else {
          this._matSnackBar.open(errors.error.message, "ok", {
            duration: 4000,
          });
        }
      }
    );
  }
}
