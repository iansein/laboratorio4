import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCountriesService {
  constructor(private http: HttpClient) {}

  async getCountries() {
    const response: any = await fetch('https://restcountries.com/v3.1/all');
    const countries: any = await response.json();
    return countries;
  }
}
