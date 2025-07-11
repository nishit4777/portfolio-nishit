import { Component, inject, OnInit } from '@angular/core';
import { PortfolioService } from '../shared/services/portfolio.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule]
})
export class SkillsComponent implements OnInit {

    private portfolioService = inject(PortfolioService);

    public skillsData: any[] = [];

    constructor() { }

    ngOnInit(): void {
        this.portfolioService.getDetilsJSON().subscribe({
            next: data => {
                this.skillsData = data.skills;
            },
            error: error => {
                console.error('Error while fetching skills data:', error);
            }
        });
    }
}
