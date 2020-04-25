import { UserBookService } from "./../../../services/user-book.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserBook } from "src/app/models/user-books";
import { MatTableDataSource } from "@angular/material";

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
    private _userBookService: UserBookService
  ) {}

  ngOnInit() {
    this._userBookService.autoRefesh.subscribe(() => {
      this.getCartList();
    });
    this.getCartList();
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
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

  calculateTotal(book: UserBook): number {
    this.cartList.forEach((fetchedBook) => {
      if (fetchedBook.bookCode.match(book.bookCode)) {
        return fetchedBook.price * fetchedBook.purchasedQuantity;
      }
    });
    return 0;
  }
}
