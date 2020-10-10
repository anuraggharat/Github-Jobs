import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private httpClient: HttpClient) { }


  getAllJobs(){
    return this.httpClient.get("https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?");
  }
}
