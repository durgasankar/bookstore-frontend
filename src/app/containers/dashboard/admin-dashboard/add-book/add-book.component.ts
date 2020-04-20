import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
  selector: "app-add-book",
  templateUrl: "./add-book.component.html",
  styleUrls: ["./add-book.component.scss"],
})
export class AddBookComponent implements OnInit {
  imageFile: { link: string; file: any; name: string };
  addBookForm: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService
  ) {
    this.addBookForm = this._formBuilder.group({
      title: ["", [Validators.required]],
      author: ["", [Validators.required]],
      price: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      image: [""],
    });
  }

  ngOnInit() {}

  imagesPreview(event) {
    console.log("event", event);
    console.log("targeted file : ", event.target.files[0]);
    const file = event.target.files[0];
    this.addBookForm.get("image").setValue(file);
    if (event.target.files && event.target.files[0]) {
      // reader
      const reader = new FileReader();
      reader.onload = (_event: any) => {
        this.imageFile = {
          link: _event.target.result,
          file: event.srcElement.files[0],
          name: event.srcElement.files[0].name,
        };
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  // getAllFormData(_formGroupData): FormData {
  //   const formData = new FormData();
  //   // console.log("image form file.", this.imageFile);
  //   formData.append("title", _formGroupData.title);
  //   formData.append("author", _formGroupData.author);
  //   formData.append("price", _formGroupData.price);
  //   formData.append("quantity", _formGroupData.quantity);
  //   formData.append("imgFile", this.imageFile.file);
  //   return _formGroupData;
  // }

  onSubmit() {
    console.log("form data overall : ", this.addBookForm.value);
    this._authenticationService.addBook(this.addBookForm.value).subscribe(
      (response) => {
        console.log("response : ", response);
      },
      (errors) => {
        console.log("errors : ", errors);
      }
    );
  }
}
