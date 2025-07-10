import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        NavigationComponent,
        DashboardComponent,
        AboutComponent,
        ContactComponent,
        ExperienceComponent,
        SkillsComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
