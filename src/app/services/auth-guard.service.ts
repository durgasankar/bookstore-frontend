import { AuthenticationService } from "src/app/services/authentication.service";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuardService {
  constructor(
    private _authenticationServices: AuthenticationService,
    private _roter: Router
  ) {}

  canActivate() {
    if (this._authenticationServices.isLoggedIn()) return true;

    this._roter.navigateByUrl("/signin");
    return false;
  }
}
