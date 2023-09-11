import { Component } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(){}

  ngOnInit(): void {
    this.getTypingText();
  }

  private getTypingText(){
    const typed = new Typed('.typing-text', {
      strings: ['frontend development', 'backend development', 'web designing', 'Full Stack development', 'web development'],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });
  }  

}
