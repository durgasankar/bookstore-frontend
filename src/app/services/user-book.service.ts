import { Injectable } from "@angular/core";
import { Subject, Observable } from "rxjs";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class UserBookService {
  private _subject = new Subject<any>();
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
}
