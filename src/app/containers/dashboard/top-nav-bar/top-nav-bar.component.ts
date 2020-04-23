import { Component, OnInit, Input } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { MatSnackBar, MatDialog } from "@angular/material";
import { AdminBookOperationService } from "src/app/services/admin-book-operation.service";
import { AddBookComponent } from "../admin-dashboard/add-book/add-book.component";

@Component({
  selector: "app-top-nav-bar",
  templateUrl: "./top-nav-bar.component.html",
  styleUrls: ["./top-nav-bar.component.scss"],
})
export class TopNavBarComponent implements OnInit {
  bookStoreName: string = "Bookstore";
  profilePicUser: string = "./assets/durgasankar.jpg";
  firstName: string;
  isAdmin: boolean;
  @Input() adminRole: string;

  constructor(
    private _router: Router,
    private _matSnackBar: MatSnackBar,
    private dialog: MatDialog,
    private _adminBookOperationService: AdminBookOperationService
  ) {}

  ngOnInit() {
    this.firstName = localStorage.firstName;
    this.isAdmin = this.isAdminUser();
  }
  isAdminUser() {
    if (localStorage.role.includes("admin")) return true;
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

  openAddBookDialog() {
    const matDialogueReference = this.dialog.open(AddBookComponent, {
      width: "auto",
      height: "auto",
      panelClass: "custom-dialog-container",
    });
    matDialogueReference.afterClosed().subscribe((result) => {
      console.log("The dialog was closed with out update");
    });
  }
}
