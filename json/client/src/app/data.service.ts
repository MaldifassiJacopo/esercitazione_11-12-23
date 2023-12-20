import { Injectable } from '@angular/core';
import { scarpe } from './models/model';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  s_Basketball: scarpe[];
  s_Streetwear: scarpe[];
  constructor(private http: HttpClient) {}
    ngOnInit(): void {
    // Make the HTTP request:
    this.http.get('https://3000-maldifassij-esercitazio-7m1cz9femri.ws-eu107.gitpod.io/api').subscribe(data => {
    // Read the result field from the JSON response.
    this.s_Basketball = data["Basketball"];
    this.s_Streetwear = data["Streetwear"];
   
    });
    }}
  
