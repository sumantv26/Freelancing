import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DevdataService {

  baseURL = "http://localhost:4000";

  constructor(private http: HttpClient) { }

  save(data):any
  {
    return this.http.post(this.baseURL+"/dev", data);
  }
  GetDevData():any{
    return this.http.get(this.baseURL+"/dev");
  }

  uploadImg(data):any{
    return this.http.post(this.baseURL+"/images",data);
  }

  sendMail(data):any{
    return this.http.post(this.baseURL+"/sendmail",data)
  }

}
