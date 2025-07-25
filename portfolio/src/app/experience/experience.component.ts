import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from '../shared/services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule]
})
export class ExperienceComponent {

    private portfolioService = inject(PortfolioService);

    public experiencesData: any[] = [];

    constructor() { }

    ngOnInit(): void {
        this.portfolioService.getDetilsJSON().subscribe({
            next: data => {
                this.experiencesData = data.experience;
            },
            error: error => {
                console.error('Error while fetching skills data:', error);
            }
        });
    }
}
