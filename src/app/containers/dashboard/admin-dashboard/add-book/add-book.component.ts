import { AdminBookOperationService } from "./../../../../services/admin-book-operation.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.scss"],
})
export class AddBookComponent implements OnInit {
  // imageFile: { link: string; file: any; name: string };
  // imageFile: File;
  showSpinner: boolean = false;
  myUrl: any;
  imageToShow: any;
  addBookForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _adminBookService: AdminBookOperationService,
    private _matSnackBar: MatSnackBar,
    private _router: Router,
    private _spinner: NgxSpinnerService
  ) {}

  onURLinserted() {}

  // getImage(imageUrl: string): Observable<File> {
  //   return this.http
  //     .get(imageUrl, { responseType: ResponseContentType.Blob })
  //     .map((res: Response) => res.blob());
  // }

  ngOnInit() {
    this._spinner.show();
    this.addBookForm = this._formBuilder.group({
      title: ["", [Validators.required]],
      author: ["", [Validators.required]],
      price: ["", [Validators.required, Validators.min(0)]],
      availableQuantity: ["", [Validators.required, Validators.min(1)]],
      imageUrl: [""],
    });
  }

  // imagesPreview(event) {
  //   console.log("event", event);
  //   console.log("targeted file : ", event.target.files[0]);
  //   const file = event.target.files[0];
  //   this.addBookForm.get("imageFile").setValue(file);
  //   if (event.target.files && event.target.files[0]) {
  //     // reader
  //     const reader = new FileReader();
  //     reader.onload = (_event: any) => {
  //       this.imageFile = {
  //         link: _event.target.result,
  //         file: event.srcElement.files[0],
  //         name: event.srcElement.files[0].name,
  //       };
  //     };
  //     reader.readAsDataURL(event.target.files[0]);
  //   }
  // }

  // getAllFormData(_formGroupData): FormData {
  //   const formData = new FormData();
  //   console.log("image form file.", this.file);
  //   formData.append("title", _formGroupData.title);
  //   formData.append("author", _formGroupData.author);
  //   formData.append("price", _formGroupData.price);
  //   formData.append("quantity", _formGroupData.quantity);
  //   formData.append("imgFile", this.file.file);
  //   return _formGroupData;
  // }

  onSubmit() {
    console.log("form data overall : ", this.addBookForm.value);
    this.showSpinner = true;
    this._adminBookService.addBook(this.addBookForm.value).subscribe(
      (response: any) => {
        console.log("response : ", response);
        this._matSnackBar.open(response.message, "ok", { duration: 4000 });
        this.showSpinner = false;
      },
      (errors: any) => {
        console.log("errors : ", errors);
        if (errors.error.httpStatus.match("NON_AUTHORITATIVE_INFORMATION")) {
          this._matSnackBar.open(errors.error.message, "Oops!", {
            duration: 4000,
          });
          this._router.navigateByUrl(`${environment.LOGIN_URL}`);
          localStorage.clear();
        } else {
          this._matSnackBar.open(errors.error.message, "ok", {
            duration: 4000,
          });
        }
        this.showSpinner = false;
      }
    );
  }
}
