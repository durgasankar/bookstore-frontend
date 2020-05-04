import { AddressUser } from "./../models/address-user";
import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";
import { UserBook } from "../models/user-books";

@Injectable({
  providedIn: "root",
})
export class UserBookService {
  private _subject = new Subject<any>();
  private _cartSize = new Subject<any>();
  constructor(private _httpService: HttpService) {}

  public get autoRefesh() {
    return this._subject;
  }

  private addRemoveFromCartUrl: string = `${
    environment.USER_BOOK_API_URL + environment.ADD_REMOVE_FROM_CART
  }`;

  private addRemoveFromWatchlistUrl: string = `${
    environment.USER_BOOK_API_URL + environment.ADD_REMOVE_FROM_WATCHLIST
  }`;

  private getUserBooksUrl: string = `${
    environment.USER_BOOK_API_URL + environment.GET_ALL_ADMIN_BOOKS
  }`;

  private getUserBooksOnCartUrl: string = `${
    environment.USER_BOOK_API_URL + environment.GET_ALL_CART_BOOKS
  }`;

  private addAddressUrl: string = `${
    environment.USER_API_URL + environment.ADD_ADDRESS_USER
  }`;

  private placeOrderUrl: string = `${
    environment.USER_BOOK_API_URL + environment.PLACE_ORDER
  }`;

  ucountriesDataFetchUrl: string =
    "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  allCountries(): Observable<any> {
    return this._httpService.getMethod(this.ucountriesDataFetchUrl, "");
  }

  public addRemoveFromCart(bookId: number): Observable<any> {
    console.log("#service reached for add remove cart operation");
    return this._httpService
      .putMethod(
        this.addRemoveFromCartUrl + bookId,
        "",
        this._httpService.httpOptions
      )
      .pipe(
        tap(() => {
          this.autoRefesh.next();
        })
      );
  }

  public addRemoveFromWatchlist(bookId: number): Observable<any> {
    console.log("#service reached for add remove watchlist operation");
    return this._httpService
      .putMethod(
        this.addRemoveFromWatchlistUrl + bookId,
        "",
        this._httpService.httpOptions
      )
      .pipe(
        tap(() => {
          this.autoRefesh.next();
        })
      );
  }

  public getAllUserBooks(): Observable<any> {
    console.log("#service reached get operation started.");
    return this._httpService.getMethod(this.getUserBooksUrl, {
      headers: new HttpHeaders().set("token", localStorage.token),
    });
  }

  public getAllUserCartBooks(): Observable<any> {
    console.log("#service reached get cart operation started.");
    return this._httpService.getMethod(this.getUserBooksOnCartUrl, {
      headers: new HttpHeaders().set("token", localStorage.token),
    });
  }

  public removeFromCart(bookCode: string): Observable<any> {
    console.log("#service reached for add remove cart operation");
    return this._httpService
      .patchMethod(
        this.addRemoveFromCartUrl + bookCode,
        "",
        this._httpService.httpOptions
      )
      .pipe(
        tap(() => {
          this.autoRefesh.next();
        })
      );
  }

  public addAddressOfUser(address: AddressUser): Observable<any> {
    console.log("#service reached for add address operation");
    return this._httpService.postMethod(
      this.addAddressUrl,
      address,
      this._httpService.httpOptions
    );
  }

  public placeOrder(orderList: UserBook[]): Observable<any> {
    console.log("#service reached for placing order");
    // alert("Your order will be processed soon.");
    return this._httpService.postMethod(
      this.placeOrderUrl,
      orderList,
      this._httpService.httpOptions
    );
  }

  setCartSize(message: number) {
    this._cartSize.next({ customer: message });
  }
  getCartSize(): Observable<number> {
    return this._cartSize.asObservable();
  }
}
