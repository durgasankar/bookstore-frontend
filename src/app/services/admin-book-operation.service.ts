import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import { environment } from "src/environments/environment";
import { BookDto } from "../models/book-dto";

@Injectable({
  providedIn: "root",
})
export class AdminBookOperationService {
  constructor(private _httpService: HttpService) {}

  private addBookUrl: string = `${
    environment.ADMIN_API_URL + environment.ADD_BOOK
  }`;

  private getAdminBooksUrl: string = `${
    environment.ADMIN_API_URL + environment.GET_ALL_ADMIN_BOOKS
  }`;

  public addBook(bookDto: BookDto) {
    console.log("#service reached add operation started.");
    return this._httpService.postMethod(
      this.addBookUrl,
      bookDto,
      this._httpService.httpOptions
    );
  }

  public getAllBooks() {
    console.log("#service reached get operation started.");
    return this._httpService.getMethod(
      this.getAdminBooksUrl,
      this._httpService.httpOptions
    );
  }
}
