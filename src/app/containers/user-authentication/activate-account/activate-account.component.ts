import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { MatSnackBar } from "@angular/material";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-activate-account",
  templateUrl: "./activate-account.component.html",
  styleUrls: ["./activate-account.component.scss"],
})
export class ActivateAccountComponent implements OnInit {
  showSpinner: boolean = false;
  token: string;
  constructor(
    private _authenticationService: AuthenticationService,
    private _matSnackBar: MatSnackBar,
    private _router: Router,
    private _spinner: NgxSpinnerService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this._spinner.show();
    this._activatedRoute.paramMap.subscribe((_parameters: ParamMap) => {
      this.token = _parameters.get("token");
      console.log("fetched token : ", this.token);
    });
  }
  onSubmit() {
    console.log("#operations_started");
    this.showSpinner = true;
    this._authenticationService.activateUser(this.token).subscribe(
      (response: any) => {
        console.log("response fetched ", response);
        this._matSnackBar.open(response.message, "ok", { duration: 5000 });
        this._router.navigateByUrl(`${environment.LOGIN_URL}`);
        this.showSpinner = false;
      },
      (errors: any) => {
        console.log("errors", errors);
        if (errors.error.statusCode === 406) {
          this._matSnackBar.open(errors.error.message, "Oops!", {
            duration: 5000,
          });
        } else {
          this._matSnackBar.open(errors.error.message, "ok", {
            duration: 5000,
          });
        }
        this._router.navigateByUrl(`${environment.LOGIN_URL}`);
        this.showSpinner = false;
      }
    );
  }
}
