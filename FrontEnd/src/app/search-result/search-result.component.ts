import { Component, OnInit } from '@angular/core';
import { DevdataService } from '../devdata.service';
import { SearchinteractionService } from '../searchinteraction.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public searchResult=[];
  searchValue;
  category
  constructor(private ds:DevdataService ,private interaction:SearchinteractionService) { }

  ngOnInit(): void {
    this.category=localStorage.getItem("searchResult")
    this.ds.GetDevData().subscribe((response)=>{
      if(response.status=="ok")
       response.data.forEach(element => {
         if(this.category==element.category)
         this.searchResult.push(element.name)
       });
      }
        )
  }


}
