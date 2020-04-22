import { Component, OnInit } from "@angular/core";
import { AdminBookOperationService } from "src/app/services/admin-book-operation.service";
import { AdminBook } from "src/app/models/admin-book";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  constructor(private _adminBookOperationService: AdminBookOperationService) {}

  ngOnInit() {}
}
