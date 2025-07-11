import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Details } from '../models/Details.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private http = inject(HttpClient);
  private skillsJsonFile = 'assets/details/details.json'

  constructor() { }

  getDetilsJSON(): Observable<Details> {
    return this.http.get<Details>(this.skillsJsonFile);
  }

}
