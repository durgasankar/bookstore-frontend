import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-user-dashboard",
  templateUrl: "./user-dashboard.component.html",
  styleUrls: ["./user-dashboard.component.scss"],
})
export class UserDashboardComponent implements OnInit {
  firstName: string;
  isAdmin: boolean;

  constructor(private _authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.firstName = localStorage.getItem("firstName");
    this.isAdmin = this.isAdminUser();
  }
  isAdminUser(): boolean {
    if (this._authenticationService.getRole() == "admin") {
      return true;
    }
    return false;
  }
}
