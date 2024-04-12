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

  public onClickMenu(){
  }

}
