import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-top-nav-bar",
  templateUrl: "./top-nav-bar.component.html",
  styleUrls: ["./top-nav-bar.component.scss"],
})
export class TopNavBarComponent implements OnInit {
  bookStoreName: string = "Bookstore";
  profilePicUser: string = "./assets/durgasankar.jpg";
  firstName: string;
  admin: boolean;

  constructor(private _router: Router, private _matSnackBar: MatSnackBar) {
    this.admin = false;
  }

  ngOnInit() {
    this.firstName = localStorage.getItem("firstName");
  }

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
