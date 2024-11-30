import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormGroupType } from 'src/app/utilities/utility-types';
import { DescriptionExtractorsFormModel } from './description-extractors/description-extractors.component';
export type ExtractorsFormModel = {
  descriptionExtractors?: DescriptionExtractorsFormModel;
};
@Component({
  selector: 'app-create-extractors',
  templateUrl: './create-extractors.page.component.html',
})
export class CreateExtractorsPageComponent implements OnInit {
  formGroup!: FormGroup<FormGroupType<Partial<ExtractorsFormModel>>>;

  dropdownStates: boolean[] = [false, false, true];
  modelDescription: any;
  items = [
    { key: 'Lavatories', value: 384, btn: 'add' },
    { key: 'Shower', value: 384, btn: 'add' },
  ];
  constructor(private readonly _formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this._formBuilder.group({});
    this.formGroup.addControl(
      'descriptionExtractors',
      this._formBuilder.group({
        name: [null, Validators.required],
        documentClass: [null, Validators.required],
        file: [null, Validators.required],
        description: [null],
      }),
    );
  }
  ngAfterViewInit(): void {
    this.formGroup.valueChanges.subscribe((values) => {
      console.table(values);
    });
  }
  ngOnDestroy(): void {}
  toggleDropdown(index: number): void {
    this.dropdownStates[index] = !this.dropdownStates[index];
  }
  addItem() {
    const newItem = { key: 'New Item', value: 100, btn: 'Delet' };
    this.items.push(newItem);
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
  submitHandler() {
    if (this.formGroup.invalid) {
      this.formGroup.markAllAsTouched();
      return;
    }
  }
}
