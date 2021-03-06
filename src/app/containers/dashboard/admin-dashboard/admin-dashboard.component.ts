import { UserBook } from "./../../../models/user-books";
import { AdminBook } from "./../../../models/admin-book";
import { AdminBookOperationService } from "./../../../services/admin-book-operation.service";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  searchBookOnTitle: any;
  sortBy: string = "none";
  selectedOption: any;
  firstName: string;
  length: number;
  isAdmin: boolean;
  adminBooks: AdminBook[];
  userBooks: UserBook[];
  assignedRole: string;
  cartSize: number;
  @Input() adminRole: boolean;
  page: number = 1;
  // dataSource: MatTableDataSource<AdminBook>;

  constructor(private _adminBookOperationService: AdminBookOperationService) {
    // Assign the data to the data source for the table to render
    // this.dataSource = new MatTableDataSource(this.adminBooks);
  }
  // @ViewChild(MatPaginator) paginator: MatPaginator;

  onClickSortBooks() {
    if (this.selectedOption === "none") {
      this.ngOnInit();
    }
    this.sortBy = this.selectedOption;
    console.log(this.sortBy);
  }

  getSearchedBookInfo() {
    this._adminBookOperationService.getSearchedBook().subscribe((message) => {
      console.log("search data", message.adminBooks);
      this.searchBookOnTitle = message.adminBooks;
    });
  }

  ngOnInit() {
    this.firstName = localStorage.firstName;
    this.assignedRole = localStorage.role;
    this.isAdmin = this.isAdminUser();
    // this.isAdmin = this.isAdminUser();
    this.getAllBooksForAdmin();
    this._adminBookOperationService.autoRefesh.subscribe(() => {
      this.getAllBooksForAdmin();
    });
    this.getSearchedBookInfo();
  }

  isAdminUser() {
    if (this.assignedRole.includes("admin")) return true;
  }

  getAllBooksForAdmin() {
    this._adminBookOperationService.getAllBooks().subscribe(
      (response: any) => {
        console.log("response : ", response);
        this.adminBooks = response.list;
        this.cartSize = this.adminBooks.length;
        console.log("admin book list after transfer : ", this.adminBooks);
      },
      (errors: any) => {
        console.log("errors : ", errors);
      }
    );
  }
}
