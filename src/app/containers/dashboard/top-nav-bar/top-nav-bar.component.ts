import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-top-nav-bar",
  templateUrl: "./top-nav-bar.component.html",
  styleUrls: ["./top-nav-bar.component.scss"],
})
export class TopNavBarComponent implements OnInit {
  bookStoreName: string = "Bookstore";
  profilePicUser: string = "./assets/durgasankar.jpg";
  firstName: string;
  constructor() {}

  ngOnInit() {
    this.firstName = localStorage.getItem("firstName");
  }
}
