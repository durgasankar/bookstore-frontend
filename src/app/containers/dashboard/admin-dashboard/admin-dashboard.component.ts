import { AdminBook } from "./../../../models/admin-book";
import { AdminBookOperationService } from "./../../../services/admin-book-operation.service";
import { Component, OnInit, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { AddBookComponent } from "./add-book/add-book.component";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  firstName: string;
  isAdmin: boolean;
  adminBooks: AdminBook[];
  assignedRole: string;
  @Input() adminRole: boolean;

  constructor(
    private dialog: MatDialog,
    private _adminBookOperationService: AdminBookOperationService
  ) {}

  ngOnInit() {
    this.firstName = localStorage.firstName;
    this.assignedRole = localStorage.role;
    this.isAdmin = this.isAdminUser();
    // this.isAdmin = this.isAdminUser();
    this.getAllBooksForAdmin();
    this._adminBookOperationService.autoRefesh.subscribe(() => {
      this.getAllBooksForAdmin();
    });
  }

  isAdminUser() {
    if (this.assignedRole.includes("admin")) return true;
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
        this.adminBooks = response.list;
        console.log("admin book list after transfer : ", this.adminBooks);
      },
      (errors: any) => {
        console.log("errors : ", errors);
      }
    );
  }
}
