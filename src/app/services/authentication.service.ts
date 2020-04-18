import { Registration } from "./../models/registration";
import { HttpService } from "./http.service";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  constructor(private _httpService: HttpService) {}

  private registrationUrl: string = `${
    environment.USER_API_URL + environment.REGISTRATION_URL
  }`;

  public registration(registrationDto: Registration) {
    console.log(
      "registration service reached : ",
      registrationDto,
      this.registrationUrl
    );
    return this._httpService.postMethod(
      this.registrationUrl,
      registrationDto,
      this._httpService.httpOptions
    );
  }
}
