import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Skills {
  name: string;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private http = inject(HttpClient);
  private skillsJsonFile = 'assets/details/skills.json'

  constructor() { }

  getSkillsJSON(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.skillsJsonFile);
  }
}
