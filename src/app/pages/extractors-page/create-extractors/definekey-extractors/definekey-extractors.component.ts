import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-definekey-extractors',
  templateUrl: './definekey-extractors.page.component.html',
})
export class DefinekeyExtractorsPageComponent implements OnInit {
  dropdownStates: boolean[] = [false]; 

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
  toggleDropdown(index: number): void {
    this.dropdownStates[index] = !this.dropdownStates[index];  
  }
}