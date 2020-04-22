import { AdminBook } from "./../../../models/admin-book";
import { AdminBookOperationService } from "./../../../services/admin-book-operation.service";
import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";
import { MatDialog } from "@angular/material";
import { AddBookComponent } from "./add-book/add-book.component";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit, AfterViewInit {
  firstName: string;
  isAdmin: boolean;
  adminBooks: AdminBook[];

  constructor(
    private dialog: MatDialog,
    private _authenticationService: AuthenticationService,
    private _adminBookOperationService: AdminBookOperationService
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit() {
    this.firstName = localStorage.getItem("firstName");
    // this.isAdmin = this.isAdminUser();
    this.getAllBooksForAdmin();
  }

  isAdminUser() {
    if (this._authenticationService.getRole().includes("admin")) {
      return true;
    }
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

  getAllBooksForAdmin() {
    this._adminBookOperationService.getAllBooks().subscribe(
      (response: any) => {
        console.log("response : ", response);
        console.log("list : ", response.list);
        this.adminBooks = response.list;
        console.log("admin book list after transfer : ", this.adminBooks);
      },
      (errors: any) => {
        console.log("errors : ", errors);
      }
    );
  }
}
