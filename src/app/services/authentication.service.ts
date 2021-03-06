import { Registration } from "./../models/registration";
import { HttpService } from "./http.service";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthenticationService {
  private role: string;
  private firstName: string;

  constructor(private _httpService: HttpService) {}

  private registrationUrl: string = `${
    environment.USER_API_URL + environment.REGISTRATION_URL
  }`;

  private verificationUrl: string = `${
    environment.USER_API_URL + environment.ACTIVATE_ACCOUNT_URL
  }`;

  private loginUrl: string = `${
    environment.USER_API_URL + environment.LOGIN_URL
  }`;

  public setRole(role: string): void {
    this.role = role;
  }

  public getRole(): string {
    return this.role;
  }

  public setFirstName(firstName: string): void {
    this.firstName = firstName;
  }

  public getFirstName(): string {
    return this.firstName;
  }

  public registration(registrationDto: Registration) {
    console.log("registration service reached : ", this.registrationUrl);
    return this._httpService.postMethod(
      this.registrationUrl,
      registrationDto,
      ""
    );
  }

  public activateUser(token: string): Observable<any> {
    return this._httpService.putMethod(
      `${this.verificationUrl}/${token}`,
      "",
      ""
    );
  }

  public login(loginDto: any) {
    console.log("fetching loginUrl : ", this.loginUrl);
    return this._httpService.postMethod(this.loginUrl, loginDto, "");
  }

  isLoggedIn() {
    if (localStorage.getItem("token")) return true;
  }
}
