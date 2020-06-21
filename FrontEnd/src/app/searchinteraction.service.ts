import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchinteractionService {
  private searchValueSource=new Subject<string>()
    searchMessage$=this.searchValueSource.asObservable()
  constructor() { }
  sendSearchValue(msg){
    this.searchValueSource.next(msg)
  }
}
