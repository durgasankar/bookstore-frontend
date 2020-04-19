import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-top-nav-bar",
  templateUrl: "./top-nav-bar.component.html",
  styleUrls: ["./top-nav-bar.component.scss"],
})
export class TopNavBarComponent implements OnInit {
  bookStoreName: string = "Bookstore";
  profilePicUser: string = "./assets/durgasankar.jpg";
  firstName: string = localStorage.getItem("firstName");
  isAdmin: any = localStorage.getItem("role").match("user");
  constructor(private _router: Router, private _matSnackBar: MatSnackBar) {}

  ngOnInit() {}

  refreshButton(): void {
    console.log("reloading page");
    window.location.reload();
  }
  signOut(): void {
    console.log("signing out => clearing token");
    this._matSnackBar.open(this.firstName + " sucessfully logged out", "ok", {
      duration: 5000,
    });
    this._router.navigateByUrl(`${environment.LOGIN_URL}`);
    localStorage.clear();
  }
}
