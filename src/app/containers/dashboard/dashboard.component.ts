import { Component, OnInit } from "@angular/core";
import { AdminBookOperationService } from "src/app/services/admin-book-operation.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  assignedRole: string;
  adminRole: boolean;
  constructor(private _adminBookOperationService: AdminBookOperationService) {}

  ngOnInit() {
    this.assignedRole = localStorage.role;
    this.adminRole = this.isAdminUser();
  }

  isAdminUser() {
    if (this.assignedRole.includes("admin")) return true;
  }
}
