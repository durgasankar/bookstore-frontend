import { AdminBook } from "./../../../models/admin-book";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-book",
  templateUrl: "./book.component.html",
  styleUrls: ["./book.component.scss"],
})
export class BookComponent implements OnInit {
  @Input() adminBook: AdminBook;
  constructor() {}

  ngOnInit() {
    console.log("fetched admin book in init of book : ", this.adminBook);
  }
}
