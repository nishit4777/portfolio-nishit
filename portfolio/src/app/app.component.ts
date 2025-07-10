import { Component } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SkillsComponent } from './skills/skills.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        CommonModule,
        NavigationComponent,
        DashboardComponent,
        AboutComponent,
        ContactComponent,
        ExperienceComponent,
        SkillsComponent
    ],
})
export class AppComponent {
  public title = 'portfolio';
}
