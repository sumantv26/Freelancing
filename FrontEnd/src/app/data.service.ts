import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  baseURL = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  signUp(data):any
  {
    return this.http.post(this.baseURL+"/sign-up", data);
  }

  signIn():any
  {
    // return this.http.post(this.baseURL+"/sign-in", data);
    return this.http.get(this.baseURL+"/sign-up");
  }

  

}
