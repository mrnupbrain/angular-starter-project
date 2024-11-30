import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { FormGroupType } from 'src/app/utilities/utility-types';
export type DescriptionExtractorsFormModel = {
  name: string;
  documentClass: string;
  file: any;
  description: string;
};
@Component({
  selector: 'app-description-extractors',
  templateUrl: './description-extractors.page.component.html',
})
export class DescriptionExtractorsPageComponent implements OnInit {
  @Input() formGroup: FormGroup<
    FormGroupType<Partial<DescriptionExtractorsFormModel>>
  >;
  @Input() form!: NgForm;

  @Input() model!: any;
  dropdownStates: boolean[] = [false];
  showImage: boolean = false;
  preview: any;
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
  toggleDropdown(index: number): void {
    this.dropdownStates[index] = !this.dropdownStates[index];
  }
  selectFiles(event: any): void {
    this.showImage = true;
    const file = event.target.files[0];
    this.preview = document.querySelector('.logo-user');
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.preview.src = reader.result;
    };
    reader.readAsDataURL(file);
    let modelFile: any = {
      File: file,
      Title: event.target.files[0].name,
    };
  }
}
