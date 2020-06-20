import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevdataService {

  baseURL = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  save(data):any
  {
    return this.http.post(this.baseURL+"/save", data);
  }

}
