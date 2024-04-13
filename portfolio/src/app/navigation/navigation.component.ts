import { Component } from '@angular/core';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
    standalone: true
})
export class NavigationComponent {

  constructor() { }


  ngOnInit(): void {
    this.setValuesInit();
  }

  private setValuesInit(){

  }

  public onClickMenu() {
    const menuElement = document.querySelector('#menu');
    const navbarElement = document.querySelector('.navbar');
    if (menuElement && navbarElement) {
      // Toggling the 'fa-times' class on the clicked element
      menuElement.classList.toggle('fa-times');
      // Toggling the 'nav-toggle' class on the element with class 'navbar'
      navbarElement.classList.toggle('nav-toggle');
    }
  }

}
