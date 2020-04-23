import { AdminBook } from "./../models/admin-book";
import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment";
import { BookDto } from "../models/book-dto";
import { Subject, BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class AdminBookOperationService {
  private _subject = new Subject<any>();
  constructor(private _httpService: HttpService) {}

  public get autoRefesh() {
    return this._subject;
  }

  private addBookUrl: string = `${
    environment.ADMIN_API_URL + environment.ADD_BOOK
  }`;

  private getAdminBooksUrl: string = `${
    environment.ADMIN_API_URL + environment.GET_ALL_ADMIN_BOOKS
  }`;

  private deleteAdminBooksUrl: string = `${
    environment.ADMIN_API_URL + environment.DELETE_BOOK_BY_ADMIN
  }`;

  public addBook(bookDto: BookDto): Observable<any> {
    console.log("#service reached add operation started.");
    return this._httpService
      .postMethod(this.addBookUrl, bookDto, this._httpService.httpOptions)
      .pipe(
        tap(() => {
          this.autoRefesh.next();
        })
      );
  }

  public getAllBooks(): Observable<any> {
    console.log("#service reached get operation started.");
    return this._httpService.getMethod(this.getAdminBooksUrl, {
      headers: new HttpHeaders().set("token", localStorage.token),
    });
  }

  public removeBook(bookId: number): Observable<any> {
    console.log("#service reached add operation started.");
    return this._httpService
      .deleteMethod(
        this.deleteAdminBooksUrl + "/" + bookId,
        this._httpService.httpOptions
      )
      .pipe(
        tap(() => {
          this.autoRefesh.next();
        })
      );
  }
}
