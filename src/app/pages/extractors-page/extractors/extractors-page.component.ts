import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-extractors-page',
  templateUrl: './extractors-page.component.html',
})
export class ExtractorsPageComponent implements OnInit, OnDestroy {
  dropdownOpen = false; 
  isModalOpen = false;  

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleModal(): void {
    this.isModalOpen = !this.isModalOpen; 
  }

  closeModal(): void {
    this.isModalOpen = false; 
  }

  acceptTerms(): void {
    console.log('Terms accepted');
    this.closeModal();
  }
}
