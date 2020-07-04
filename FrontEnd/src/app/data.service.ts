import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  baseURL = "http://13.59.163.207";

  constructor(private http: HttpClient) { }

  signUp(data):any
  {
    return this.http.post(this.baseURL+"/sign-up", data);
  }

  signIn(data):any
  {
    // return this.http.post(this.baseURL+"/sign-in", data);
    return this.http.post(this.baseURL+"/sign-up-chek",data);
  }

  

}
