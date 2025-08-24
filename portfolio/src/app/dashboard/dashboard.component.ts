import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import Typed from 'typed.js';

declare var particlesJS: any;
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    standalone: true,
    imports:[
      CommonModule
    ]
})
export class DashboardComponent {

  public whatsappLink: any;
  public githubLink: any;
  public xLink: any;
  public linkedinLink: any;
  public gmailLink: any;

  constructor() { }


  ngOnInit(): void {
    this.setValuesInit();
  }

  private setValuesInit() {
    this.getTypingText();
    this.setSocialLink();
    particlesJS.load('particles-js', 'assets/details/particle.json', null);
  }

  private getTypingText() {
    const typed = new Typed('.typing-text', {
      strings: ['frontend development', 'backend development', 'Full Stack development'],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500,
    });
  }

  private setSocialLink() {
    this.whatsappLink = "https://wa.me/918903547795";
    this.githubLink = "https://github.com/nishit4777/";
    this.xLink = "https://twitter.com/nishit4777";
    this.gmailLink = "mailto:nishitmohanasundaram@gmail.com";
    this.linkedinLink = "https://www.linkedin.com/in/nishit-mohan/";
  }


}
