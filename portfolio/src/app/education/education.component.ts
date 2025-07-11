import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PortfolioService } from '../shared/services/portfolio.service';

@Component({
  selector: 'app-education',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {

   private portfolioService = inject(PortfolioService);

    public educationData: any;

    constructor() { }

    ngOnInit(): void {
        this.portfolioService.getDetilsJSON().subscribe({
            next: data => {
                this.educationData = data.education;
            },
            error: error => {
                console.error('Error while fetching skills data:', error);
            }
        });
    }
}
