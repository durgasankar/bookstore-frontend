import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _httpClient: HttpClient) {}

  // fetching token from local storage stored during login
  public httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.getItem("token"),
    }),
  };

  public postMethod(url: string, body: any, options: any): Observable<any> {
    return this._httpClient.post(url, body, options);
  }

  public getMethod(url: string, options: any): Observable<any> {
    return this._httpClient.get(url, options);
  }
}