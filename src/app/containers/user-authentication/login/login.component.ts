import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/services/authentication.service";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  loginForm: FormGroup;
  showSpinner: boolean = false;
  assignedRole: string;
  constructor(
    private _authenticationService: AuthenticationService,
    private _formBuilder: FormBuilder,
    private _matSnackBar: MatSnackBar,
    private _router: Router,
    private _spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this._spinner.show();
    this.loginForm = this._formBuilder.group({
      userName: [
        null,
        Validators.compose([Validators.compose([Validators.required])]),
      ],
      password: [
        null,
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ]),
      ],
    });
  }

  onSubmit() {
    this.showSpinner = true;
    if (this.loginForm.invalid) {
      return this._router.navigateByUrl(`${environment.LOGIN_URL}`);
    }
    console.log("login value", this.loginForm.value);
    this._authenticationService.login(this.loginForm.value).subscribe(
      (response: any) => {
        console.log("response message : ", response);
        this._matSnackBar.open(
          "Welcome Mr/s. " +
            response.loginInfo.firstName +
            ", to " +
            response.loginInfo.role +
            " page.",
          "ok",
          { duration: 3000 }
        );
        // valid user
        if (response.statusCode === 200) {
          localStorage.setItem("token", response.loginInfo.token);
          localStorage.setItem("firstName", response.loginInfo.firstName);
          localStorage.setItem("role", response.loginInfo.role);
          this.assignedRole = response.loginInfo.role;
          this._authenticationService.setRole(response.loginInfo.role);
          // user
          if (this.assignedRole.match("user")) {
            this._router.navigateByUrl("dashboard/user");
            // admin
          } else {
            this._router.navigateByUrl("dashboard/admin");
          }
        } else {
          // un-identified role
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
        }
      },
      (errors: any) => {
        console.log("error : ", errors);
        // bad credentials
        if (errors.error.httpStatus.match("NON_AUTHORITATIVE_INFORMATION")) {
          console.log("bad credentials : ", errors.error);
          this._matSnackBar.open(errors.error.message, "cancel", {
            duration: 5000,
          });
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
          localStorage.clear();
          // user not found
        } else if (errors.error.httpStatus.match("NOT_FOUND")) {
          console.log("not found user : ", errors.error.message);
          this._matSnackBar.open(
            errors.error.message + ", Please register.",
            "Opps!",
            { duration: 5000 }
          );
          this._router.navigateByUrl(`${environment.REGISTRATION_URL}`);
          // any other exceptions if occured
        } else {
          console.log("un authenticated : ", errors.error);
          this._matSnackBar.open(
            "Oops...Login failed!.Internal Server Error!",
            "ok",
            {
              duration: 5000,
            }
          );
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
        }
        this.showSpinner = false;
      },
      () => {
        this.showSpinner = false;
      }
    );
  }
}
