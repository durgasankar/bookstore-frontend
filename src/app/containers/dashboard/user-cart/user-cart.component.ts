import { UserBookService } from "./../../../services/user-book.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserBook } from "src/app/models/user-books";
import { MatSnackBar } from "@angular/material";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";

@Component({
  selector: "app-user-cart",
  templateUrl: "./user-cart.component.html",
  styleUrls: ["./user-cart.component.scss"],
})
export class UserCartComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  cartList: UserBook[];
  quantity: number = 1;
  cartSize: number;
  totalAmount: number;
  constructor(
    private _formBuilder: FormBuilder,
    private _userBookService: UserBookService,
    private _matSnackBar: MatSnackBar,
    private _router: Router
  ) {}

  ngOnInit() {
    this._userBookService.autoRefesh.subscribe(() => {
      this.getCartList();
    });
    this.getCartList();
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }

  getCartList() {
    this._userBookService.getAllUserCartBooks().subscribe(
      (response) => {
        console.log("response cart : ", response);
        this.cartList = response.list;
        this.cartSize = this.cartList.length;
        console.log("cart list : ", this.cartList);
        const price = this.cartList.map((fetchedBook) => fetchedBook.price);
        const total = price.reduce((a, b) => a + b, 0);
        // const tota = quantity.
        this.totalAmount = total;
      },
      (errors) => {
        console.log(errors);
      }
    );
  }

  increaseQuantity(book: UserBook) {
    this.cartList.forEach((fetchedBook) => {
      if (fetchedBook.bookCode.match(book.bookCode)) {
        fetchedBook.purchasedQuantity = fetchedBook.purchasedQuantity + 1;
      }
    });
  }
  decreseQuantity(book: UserBook) {
    this.cartList.forEach((fetchedBook) => {
      if (
        fetchedBook.bookCode.match(book.bookCode) &&
        fetchedBook.purchasedQuantity > 1
      ) {
        fetchedBook.purchasedQuantity = fetchedBook.purchasedQuantity - 1;
      }
    });
  }

  // calculateTotal(book: UserBook) {
  //   this.cartList.forEach((fetchedBook) => {
  //     if (fetchedBook.bookCode.match(book.bookCode)) {
  //       this.totalAmount = fetchedBook.price * fetchedBook.purchasedQuantity;
  //     }
  //   });
  // }

  removeFromCart(fetchedBook: UserBook) {
    console.log("book code : ", fetchedBook.bookCode);
    // console.log(" value : ", this.isAddedToBag);
    this._userBookService.removeFromCart(fetchedBook.bookCode).subscribe(
      (response: any) => {
        console.log("response : ", response);
        this._matSnackBar.open(
          fetchedBook.title + " " + response.message,
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
