import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { MatDialog } from "@angular/material";
import { AddBookComponent } from "./add-book/add-book.component";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  firstName: string;
  isAdmin: boolean = true;

  constructor(
    private dialog: MatDialog,
    private _authenticationService: AuthenticationService
  ) {
    this.isAdmin = this.isAdminUser();
  }

  ngOnInit() {
    this.firstName = localStorage.getItem("firstName");
    this.isAdmin = this.isAdminUser();
  }

  isAdminUser(): boolean {
    if (this._authenticationService.getRole() === "admin") return true;
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
