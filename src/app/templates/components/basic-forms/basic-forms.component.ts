import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-forms',
  templateUrl: './basic-forms.component.html',
  styles: [],
})
export class BasicFormsComponent implements OnInit {
  @ViewChild('addProductForm') form!: NgForm;

  constructor() {}

  ngOnInit(): void {}

  checkProductName(): boolean {
    return (
      this.form?.controls.product?.invalid &&
      this.form?.controls.product?.touched
    );
  }

  checkProductPrice(): boolean {
    return (
      (this.form?.controls.price?.value < 0 ||
        this.form?.controls.price?.value === null ||
        this.form?.controls.price?.value === '') &&
      this.form?.controls.price?.touched
    );
  }

  saveProduct(): void {}
}
