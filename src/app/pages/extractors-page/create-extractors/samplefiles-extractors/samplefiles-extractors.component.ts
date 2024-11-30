import { Component, OnInit } from '@angular/core';
import { AttachmentType } from '../../model/attachment.type';

@Component({
  selector: 'app-samplefiles-extractors',
  templateUrl: './samplefiles-extractors.page.component.html',
})
export class SamplefilesExtractorsPageComponent implements OnInit {
  attachmentsWriting_task1: AttachmentType[] = [];

  dropdownStates: boolean[] = [false, false, true];
  items = [{ key: 'Lavatories', value: 384, btn: 'add' }];
  constructor() {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}
  toggleDropdown(index: number): void {
    this.dropdownStates[index] = !this.dropdownStates[index];
  }
  fileUploaded(file: AttachmentType) {
    this.attachmentsWriting_task1.push(file);
  }
  addItem() {
    const newItem = { key: 'New Item', value: 100, btn: 'Delet' };
    this.items.push(newItem);
  }
  deleteItem(index: number): void {
    this.items.splice(index, 1);
  }
}
