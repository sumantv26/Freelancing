import { Component, OnInit } from '@angular/core';
import { DevdataService } from '../devdata.service';
import { SearchinteractionService } from '../searchinteraction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  public searchResult=[];
  searchValue;
  category;
  
  constructor(private devs:DevdataService ,private interaction:SearchinteractionService ,private router:Router) { }

  ngOnInit(): void {

    this.category=localStorage.getItem("searchResult")
    var arr=this.category.split(" ")
    this.devs.GetDevData().subscribe((response)=>{
      if(response.status=="ok")
       response.data.forEach(element => {
         for(let i=0 ; arr.length>i;i++){
         if(arr[i]==element.category)
         this.searchResult.push({name:element.name,email:element.email,cat:arr[i]})
        }
        //  console.log(this.category.split(","))
       });
      }
        )
  }
  sendData(d){
      localStorage.setItem("devemail",d)
      this.router.navigate(["/devprofile"])
  }

}
