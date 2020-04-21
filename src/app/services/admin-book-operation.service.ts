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

  public addBook(bookDto: BookDto) {
    console.log("#service reached operation started.");
    return this._httpService.postMethod(
      this.addBookUrl,
      bookDto,
      this._httpService.httpOptions
    );
  }
}
