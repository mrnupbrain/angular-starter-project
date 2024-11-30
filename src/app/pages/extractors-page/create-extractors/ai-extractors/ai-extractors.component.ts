import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai-extractors',
  templateUrl: './ai-extractors.page.component.html',
})
export class AiExtractorsPageComponent implements OnInit {
  dropdownStates: boolean[] = [false]; 
  dropdownOpen = false; 
  
  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
  toggleDropdown(index: number): void {
    this.dropdownStates[index] = !this.dropdownStates[index];  
  }
  toggleDropdownai(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }
}