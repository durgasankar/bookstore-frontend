import { AuthenticationService } from "./../../../services/authentication.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { MatchPassword } from "./password-match";
import { MatSnackBar } from "@angular/material";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "app-registration",
  templateUrl: "./registration.component.html",
  styleUrls: ["./registration.component.scss"],
})
export class RegistrationComponent implements OnInit {
  hide: boolean;
  registrationForm: FormGroup;
  showSpinner: boolean = false;
  constructor(
    private _authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this._spinner.show();
    this.registrationForm = this._formBuilder.group(
      {
        firstName: [
          null,
          [Validators.required, Validators.pattern("^[a-zA-Z]{1,255}$")],
        ],
        lastName: [
          null,
          [Validators.required, Validators.pattern("^[a-zA-Z]{1,255}$")],
        ],
        emailId: [
          null,
          Validators.compose([Validators.required, Validators.email]),
          ,
        ],
        mobileNumber: [
          null,
          Validators.compose([
            Validators.required,
            Validators.pattern("^[0-9]{10}$"),
          ]),
        ],
        userName: [null, [Validators.required]],
        password: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(10),
          ]),
        ],
        confirmPassword: [
          null,
          Validators.compose([
            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(10),
          ]),
        ],
        role: [null, Validators.required],
      },
      { validator: MatchPassword("password", "confirmPassword") }
    );
  }

  onSubmit() {
    this.showSpinner = true;
    if (this.registrationForm.invalid) {
      return this._router.navigateByUrl(`${environment.REGISTRATION_URL}`);
    }
    console.log("user model : ", this.registrationForm.value);
    this._authenticationService
      .registration(this.registrationForm.value)
      .subscribe(
        (response: any) => {
          console.log(response);
          this._matSnackBar.open(response.message, "ok", {
            duration: 5000,
          });
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
          this.showSpinner = false;
        },
        (errors: any) => {
          console.log("errors : ", errors);
          this._matSnackBar.open(errors.error.message, "ok", {
            duration: 5000,
          });
          this._router.navigateByUrl(`${environment.REGISTRATION_URL}`);
          this.showSpinner = false;
        }
      );
  }

  get userInfo() {
    return this.registrationForm.controls;
  }
}
