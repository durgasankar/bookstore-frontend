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
  isAddedToBag: boolean = false;
  isAddedToWatchList: boolean = false;

  constructor(
    private _adminBookOperationService: AdminBookOperationService,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit() {}

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
    if (this.isAddedToBag === false) {
      this.isAddedToBag = true;
    } else {
      this.isAddedToBag = false;
    }
    console.log("note id : ", bookId);
    console.log(" value : ", this.isAddedToBag);
  }

  addToWatchList(bookId: number) {
    if (this.isAddedToWatchList === false) {
      this.isAddedToWatchList = true;
    } else {
      this.isAddedToWatchList = false;
    }
    console.log("note id : ", bookId);
    console.log(" value : ", this.isAddedToWatchList);
  }
}
